import React, { useState, useRef, useContext } from "react";

import { DocumentScanner } from './DocumentScanner';
import { SignStamp } from './SignStamp';
import { BatchScanning } from './BatchScanning';
import { AdvancedFilters } from './AdvancedFilters';
import { ExportShare } from './ExportShare';
import { GlobalContext } from '@/context/GlobalContext';

export const Router = () => {
  const { selectedPageIndex } = useContext(GlobalContext);

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