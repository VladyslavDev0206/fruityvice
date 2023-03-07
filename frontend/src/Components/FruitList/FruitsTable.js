import React, { useEffect } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from 'react-bootstrap-table-next';
import Container from "react-bootstrap/esm/Container";
import filterFactory from "react-bootstrap-table2-filter";

import { columns, sumColumns } from "./fruitsTableColumns";

const FruitsTable = ({fruits, favorite}) => {

  useEffect(() => {
  },[]);

  return (
    <>
      <h2 className="mt-5 text-center">Fruits</h2>
      <Container className="mt-5">
        {
          favorite?
          <BootstrapTable keyField="id" data={[]} columns={sumColumns(fruits)}/>
          :
          <></>
        }
        <BootstrapTable keyField='id' data={fruits} columns={columns(favorite)} pagination={paginationFactory()} filter={ favorite ? undefined : filterFactory() } />
        
      </Container>
    </>
  )
}

export default FruitsTable;