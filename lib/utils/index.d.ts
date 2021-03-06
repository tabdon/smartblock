import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Node, Schema } from 'prosemirror-model';
import { Dispatch } from '../types';
export declare const getScrollTop: () => number;
export declare const getScrollLeft: () => number;
export declare const getOffset: (el: any) => {
    top: any;
    left: any;
};
export declare const isInput: (el: HTMLElement) => boolean;
export declare const getViewport: () => {
    left: number;
    top: number;
    width: number;
    height: number;
    keyboardHeight?: undefined;
} | {
    left: number;
    top: number;
    width: number;
    height: number;
    keyboardHeight: number;
};
export declare const markActive: (type: any) => (state: any) => any;
export declare const getMarkInSelection: (markName: string, state: EditorState<any>) => import("prosemirror-model").Mark<any>;
export declare const blockActive: (type: any) => (state: any) => boolean;
export declare const canInsert: (type: any) => (state: any) => boolean;
export declare const findNodePosition: (doc: Node<any>, target: Node<any>) => number;
export declare const getRootNodeWithPosByIndex: (state: EditorState<any>, index: number) => import("prosemirror-utils").NodeWithPos;
export declare const getRootNodeCountFromState: (state: EditorState<any>) => number;
export declare const getParentNodeWithPosFromState: (state: EditorState<any>) => import("prosemirror-utils").NodeWithPos;
export declare const getParentNodeIndexFromState: (state: EditorState<any>) => number;
export declare const getParentNodeFromState: (state: EditorState<any>) => Node<any>;
export declare const getParentNodePosFromState: (state: EditorState<any>) => number;
export declare const findSelectedNodeWithType: (nodeType: any, state: any) => any;
export declare const liftListItem: (itemType: any) => (state: EditorState<any>, dispatch?: Dispatch) => boolean;
export declare const createTable: (schema: any, attrs: any, rowsCount?: number, colsCount?: number, withHeaderRow?: boolean, cellContent?: any) => any;
export declare const calculateStyle: (view: EditorView<any>, offset?: {
    top: number;
    left: number;
}) => {
    left: number;
    top: number;
};
export declare const isDescendant: (parent: HTMLElement, child: HTMLElement) => boolean;
export declare const stripPtag: (html: string) => string;
export declare const getHtmlFromNode: (doc: Node<any>, schema: Schema<any, any>) => string;
export declare const getBrowser: () => string;
export declare const getUniqId: () => string;
