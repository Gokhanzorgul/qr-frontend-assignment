import React, { useState, useRef } from "react";
import { DocumentScanner } from './DocumentScanner';
import { SignStamp } from './SignStamp';
import { BatchScanning } from './BatchScanning';
import { AdvancedFilters } from './AdvancedFilters';
import { ExportShare } from './ExportShare';

export const Router = (props) => {
  const { selectedPageIndex } = props;
  switch (selectedPageIndex) {
    case 0:
      return <DocumentScanner />
    case 1:
      return <SignStamp />
    case 2:
      return <BatchScanning />
    case 3:
      return <AdvancedFilters />
    case 4:
      return <ExportShare />
  }
}