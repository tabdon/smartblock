import * as React from 'react';
import { setBlockType } from 'prosemirror-commands';
import * as uuid from 'uuid/v4'
import HeadingIcon from '../components/icons/heading6';
import AlignLeftIcon from '../components/icons/align-left';
import AlignCenterIcon from '../components/icons/align-center';
import AlignRightIcon from '../components/icons/align-right';
import { Extension, ExtensionProps } from '../types';
import { blockActive, getParentNodeFromState } from '../utils';
import Button from '../components/button';

export default class Heading6 extends Extension {
  constructor(props?: ExtensionProps) {
    super(props);
  }

  get name() {
    return 'heading6';
  }

  get group() {
    return 'block';
  }

  get showMenu() {
    return true;
  }

  get schema() {
    if (this.customSchema) {
      return this.customSchema;
    }
    return {
      content: 'inline*',
      group: 'block',
      defining: true,
      parseDOM: [
        {
          tag: 'h6',
          getAttrs(dom) {
            return {
              id: dom.getAttribute('id') || uuid()
            }
          }
        }
      ],
      attrs: {
        align: { default: '' },
        id: { default: '' }
      },
      toDOM(node) {
        return [
          'h6',
          (node.attrs.align ? {
            style: `text-align: ${node.attrs.align}`,
            class: this.className
          } : {
            class: this.className
          }),
          0
        ]
      }
    }
  }

  get icon() {
    return <HeadingIcon style={{ width: '24px', height: '24px' }} />
  }

  active(state) {
    return blockActive(state.schema.nodes.heading6)(state);
  }

  enable(state) {
    return setBlockType(state.schema.nodes.heading6)(state);
  }

  customMenu({ state, dispatch }) {
    const node = getParentNodeFromState(state);
    return (
      <>
        <Button
          active={node && node.attrs.align === 'left'}
          type="button"
          onClick={() => {
            setBlockType(state.schema.nodes.heading6, {
              align: 'left'
            })(state, dispatch)
          }}
        >
          <AlignLeftIcon style={{ width: '24px', height: '24px' }} />
        </Button>
        <Button
          type="button"
          active={node && node.attrs.align === 'center'}
          onClick={() => {
            setBlockType(state.schema.nodes.heading6, {
              align: 'center'
            })(state, dispatch)
          }}
        >
          <AlignCenterIcon style={{ width: '24px', height: '24px' }} />
        </Button>
        <Button
          type="button"
          active={node && node.attrs.align === 'right'}
          onClick={() => {
            setBlockType(state.schema.nodes.heading6, {
              align: 'right'
            })(state, dispatch)
          }}
        >
          <AlignRightIcon style={{ width: '24px', height: '24px' }} />
        </Button>
      </>
    )
  }

  onClick(state, dispatch) {
    setBlockType(state.schema.nodes.heading6)(state, dispatch);
  }
}
