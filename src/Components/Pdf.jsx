import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import LebronStretch from "../photos/lebron_transparent.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 18,
    textAlign: "justify",
  },
  text: {
    // margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    marginBottom: 10
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    // color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>Food Lovers</Text>
        {/* <Image style={styles.image} src={LebronStretch} /> */}
        <Text style={styles.title}>
        1. What is the differences between uncontrolled and controlled components.?
        </Text>
        <Text style={styles.text}>
        Ans: Controlled components provide a more reliable and predictable way to manage the state of a component, while uncontrolled components can offer more flexibility in some situations.
        </Text>
        <Text style={styles.title}>
        2. How to validate React props using PropTypes?
        </Text>
        <Text style={styles.text}>
        Ans: Importing the PropTypes library and defining a functional component called MyComponent. We then use the propTypes property to define the expected props for our component. In this case, we are expecting a prop called "text" that should be a string and is required. PropTypes allows us to validate our component props at runtime, helping us to catch errors early and ensure that our components are used correctly.
        </Text>
        <Text style={styles.title}>
        3. What is the difference between nodejs and express js?
        </Text>
        <Text style={styles.text}>
        Ans: Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js. Node.js provides the core functionality for running JavaScript code, while Express.js provides a set of tools and conventions for building web applications. Express.js simplifies the process of building web applications by providing features such as routing, middleware, and tempesting, while Node.js provides the underlying infrastructure for executing the application.
        </Text>
        <Text style={styles.title}>
        4. What is a custom hook and why will you create a custom hook?
        </Text>
        <Text style={styles.text}>
        Ans: A custom hook is a reusable function in React that encapsulates logic used by multiple components. It allows developers to abstract away complex logic and reuse it throughout their application. Custom hooks can be used to share stateful logic, side effects, and other functionality between components without duplicating code. Developers create custom hooks to simplify their codebase and make it more maintainable.
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;