import React from "react";
import { Button, Container } from "react-bootstrap";
import Pdf from "react-to-pdf";
const ref = React.createRef();



const Blog = () => {


  return (
    <Container className="my-5 ">
      <h2 className="text-center">Simple Answer Questions</h2>
      <div className="text-center">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
        </Pdf>
      </div>
      <div ref={ref}>
      <hr />
      <div className="p-5">
        <h5> Question #1 : Tell us the differences between uncontrolled and controlled components?</h5>
        <p> Answer: An uncontrolled component is a component that manages its own state internally. It does not require explicit intervention from the parent component to update its state. The state of an uncontrolled component is managed by the component itself, using a ref to access the DOM element. On the other hand,A controlled component is a component that does not manage its own state internally. Instead, its state is managed by the parent component through props. The parent component is responsible for updating the state of the controlled component and passing it back down to the child component via props. </p>
        <h5> Question #2 : How to validate React props using PropTypes?</h5>
        <p> Answer:React provides a built-in utility called PropTypes that can be used to validate the props passed to a component. PropTypes can be used to check the type and shape of the props, and ensure that they match the expected values. </p>
        <h5> Question #3 : Tell us the difference between nodejs and express js.?</h5>
        <p> Answer: Node.js is a runtime environment for executing JavaScript code outside of the web browser. It allows developers to write server-side JavaScript applications that can handle HTTP requests, interact with databases, and perform other server-side tasks. Express.js, on the other hand, is a web framework for Node.js that makes it easier to build web applications and APIs. It provides a higher-level abstraction on top of Node.js's built-in HTTP module, allowing developers to define routes, middleware, and other web-related functionality more easily. </p>
        <h5> Question #4 : What is a custom hook, and why will you create a custom hook?</h5>
        <p> Answer:Custom hooks allow developers to write reusable code and reduce the amount of boilerplate code in their components. They can also simplify complex logic and make it more manageable by breaking it down into smaller, more focused hooks. Custom hooks can be reused across different components, allowing developers to avoid duplicating code and promoting code reuse. </p>
      </div>
        
        
      </div>
     
    </Container>
  );
};

export default Blog;