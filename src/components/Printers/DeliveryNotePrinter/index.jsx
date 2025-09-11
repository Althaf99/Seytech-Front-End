import React, { forwardRef } from "react";

import Grid from "@material-ui/core/Grid";

import PrintableTable from "../../../components/PrintableTable";

import Seytec from "../../../Seytech.png";

import { styles } from "./styles";

import useDeliveryNote from "../../../hooks/services/useDeliveryNote";
import { formatDate } from "./../ExcessSheetPrinter/helper.js";

const columns = [
  {
    Header: "ID",
    accessor: "id",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "No",
    accessor: "no",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
    width: "1%",
  },
  {
    Header: "Item",
    accessor: "item",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "Description",
    accessor: "description",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "Quantity",
    accessor: "quantity",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
];

export const DeliveryNotePrinter = forwardRef((props, ref) => {
  const classes = styles();

  const { data: deliveryNoteData } = useDeliveryNote({
    itemName: props.itemName,
    itemColor: props.itemColor,
    startDate: props.startDate ? formatDate(props.startDate) : null,
    endDate: props.endDate ? formatDate(props.endDate) : null,
  });
  deliveryNoteData?.sort((a, b) => a.itemName.localeCompare(b.itemName));

  let no = 0;
  deliveryNoteData?.forEach((element) => {
    element.item = `${element.itemName} ${element.itemColor}`;
    no = no + 1;
    element.no = no;
  });

  const marginTop = "10px";
  const marginRight = "25px";
  const marginBottom = "10px";
  const marginLeft = "25px";
  const getPageMargins = () => {
    return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
  };

  const pageStyle = `
    @page {
      size: A4;
      margin: 1in;
    }
    @media all {
      .page-break {
        display: none;
      }
    }
    @media print {
      .page-break {
        page-break-before: always;
      }
    }
  `;
  return (
    <>
      <div ref={ref} className={classes.body}>
        <table className="print-component">
          <thead>
            <tr>
              <th>
                <Grid item container spacing={2} justifyContent="space-between">
                  <Grid item xs={12}>
                    <Grid>
                      <img
                        src={Seytec}
                        alt="react logo"
                        className={classes.image}
                      />
                    </Grid>
                  </Grid>
                  <Grid item style={{ paddingBottom: "10px" }}>
                    <Grid>
                      <div>
                        Rideegama,Matale Road,Kurunegala, Telephone: 0372251321,
                        Mobile: 0773460618
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid>
                      To : <u>M/S Rainco Pvt.Ltd</u>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid>Date : {formatDate(props?.startDate)}</Grid>
                  </Grid>
                </Grid>
                <Grid className={classes.heading}>
                  <u>DelivertNote</u>
                </Grid>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Grid item xs={12}>
                  {deliveryNoteData && columns && (
                    <PrintableTable
                      columns={columns}
                      data={deliveryNoteData}
                      customProps={{ height: "600px" }}
                      hiddenColumns={["id"]}
                      fontSize="24px"
                      color="#FFFFFF"
                    />
                  )}
                </Grid>
              </td>
            </tr>
          </tbody>
          <tfoot className="table-footer">
            <tr>
              <td>
                <Grid container classes={{ container: classes.gridContainer }}>
                  <Grid item xs={12} className={classes.signature}>
                    <Grid>---------------------------------</Grid>
                    <Grid>Manager,</Grid>
                    <Grid>Seytech</Grid>
                  </Grid>
                </Grid>
              </td>
            </tr>
          </tfoot>
        </table>
        <style>{getPageMargins()}</style>
        <style>{pageStyle}</style>
      </div>
    </>
  );
});
