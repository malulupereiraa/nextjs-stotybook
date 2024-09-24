/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Spinner } from "react-bootstrap";
import { ContainerLoadingSystem } from "../../../@theme/styles/components/loadingsystem/LoadingSystemStyle";

const LoadingSystem: React.FC<any> = ({}) => {
  return (
    <>
      <ContainerLoadingSystem>
        <Col className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </ContainerLoadingSystem>
    </>
  );
};
export default LoadingSystem;
