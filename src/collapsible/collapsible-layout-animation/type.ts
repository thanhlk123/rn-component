import React from 'react';

export interface CollapsibleProps {
  /**
   * Custom master content
   */
  renderMasterView?: React.ReactNode;

  /**
   * use function-> React.Node instead children
   */
  renderContent?: React.ReactNode;

  children?: React.ReactNode;

  disable?: boolean;
}
