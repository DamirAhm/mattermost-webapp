// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React, {useState} from 'react';
import {DefaultNodeModel, DiagramEngine} from '@projectstorm/react-diagrams';

import {generateId} from 'utils/utils';

import NodeModal from './node-modal/node-model';

type Props = {
    children?: React.ReactNode;
    engine: DiagramEngine;
    forceUpdate: () => void;
    graphEventHandler: any;
}
export type NodeType = 'webhook' | 'flow' | 'event' | 'action' | 'slash-command' |'switch' | 'random' |'if';

export const NodeTypeConstant: Record<string, NodeType> = {
    WEBHOOK: 'webhook',
    FLOW: 'flow',
    EVENT: 'event',
    ACTION: 'action',
    SLASH_COMMAND: 'slash-command',
    SWITCH: 'switch',
    RANDOM: 'random',
    IF: 'if',
};

const SystembusCanvasWidget = ({children, engine, forceUpdate, graphEventHandler}: Props): JSX.Element => {
    const [dropData, setDropData] = useState<{data: any; point: any; inPorts: string[]; outPorts: string[]; nodeType: NodeType} | null>(null);
    const handleOnModalConfirm = (data: any) => {
        if (dropData) {
            createNode({...dropData.data, ...data}, dropData.point, dropData.inPorts, dropData.outPorts);
            setDropData(null);
        }
    };

    const handleOnModalCancel = () => {
        setDropData(null);
    };

    const createNode = (data: any, point: any, inPorts: string[], outPorts: string[]) => {
        if (data && point) {
            const id = generateId();
            if (data.type === 'webhook') {
                data.name = `webhook\n${id}`;
            }
            const node: DefaultNodeModel = new DefaultNodeModel({id, name: data.name, color: data.color, extras: {original: {id, ...data}}});
            inPorts.forEach((port) => {
                node.addInPort(port);
            });
            outPorts.forEach((port) => {
                node.addOutPort(port);
            });

            node.setPosition(point);
            node.registerListener({
                eventDidFire: graphEventHandler,
            });

            const nodeOptions = node.getOptions();
            nodeOptions.extras.original.x = point.x;
            nodeOptions.extras.original.y = point.y;
            engine.getModel().addNode(node);
            forceUpdate();
        }
    };

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
        const point = engine.getRelativeMousePoint(event);
        if (data.type === 'event') {
            createNode(data, point, [], ['out']);
        } else if (data.type === 'action') {
            createNode(data, point, ['in'], ['out']);
        } else if (data.type === NodeTypeConstant.SLASH_COMMAND) {
            setDropData({data, point, inPorts: [], outPorts: ['main'], nodeType: NodeTypeConstant.SLASH_COMMAND});
        } else if (data.type === NodeTypeConstant.WEBHOOK) {
            setDropData({data, point, inPorts: [], outPorts: ['out'], nodeType: NodeTypeConstant.WEBHOOK});
        } else if (data.type === NodeTypeConstant.FLOW) {
            if (data.name === NodeTypeConstant.IF) {
                setDropData({data, point, inPorts: ['in'], outPorts: ['then', 'else'], nodeType: NodeTypeConstant.IF});
            } else if (data.name === NodeTypeConstant.SWITCH) {
                setDropData({data, point, inPorts: ['in'], outPorts: [], nodeType: NodeTypeConstant.SWITCH});
            } else if (data.name === NodeTypeConstant.RANDOM) {
                setDropData({data, point, inPorts: ['in'], outPorts: [], nodeType: NodeTypeConstant.RANDOM});
            }
        }
    };

    return (
        <div
            className='systembus__ctr'
            onDrop={onDrop}
        >
            {children}
            {dropData &&
                <NodeModal
                    nodeType={dropData.nodeType}
                    handleOnModalCancel={handleOnModalCancel}
                    handleOnModalConfirm={handleOnModalConfirm}
                />
            }
        </div>
    );
};

export default SystembusCanvasWidget;