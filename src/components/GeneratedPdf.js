import React from "react";
import { PDFViewer, Page, Text, View, Document } from '@react-pdf/renderer';

import styles from "./generatedPdf.module.css";

const GeneratedPdf = (props) => {
 return(
  <PDFViewer className={styles.generatedPdfSection}>
    <Document>
      <Page size="A4" className={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
          <Text>{props.enteredName}</Text>
          <Text>{props.enteredEmail}</Text>
          <Text>{props.enteredNote}</Text>
        </View>
        <View className={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
 )
};

export default GeneratedPdf;