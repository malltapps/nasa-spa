import React from "react";
import { Col4 } from "./../Grid/";
import { Modal, Button, Loader } from "semantic-ui-react";
import { useDefaultStore } from "./../../store/";

const Results: React.FC = () => {
  const [state, setState] = useDefaultStore();
  const { loading, result, modal, modalContent } = state;

  function inputModalContent(
    title: string,
    nasa_id: string,
    media_type: string
  ) {
    setState({
      ...state,
      modal: true,
      modalContent: { title, nasa_id, media_type },
    });
  }

  return (
    <>
      <Modal open={modal} dimmer="blurring">
        <Modal.Header>
          {modalContent.title}
          <Button
            type="button"
            floated="right"
            color="grey"
            content="Fechar"
            onClick={() => setState({ ...state, modal: false })}
          />
        </Modal.Header>
        <Modal.Content>
          {modalContent.media_type === "image" ? (
            <>
              <img
                alt={modalContent.title}
                width="100%"
                src={`https://images-assets.nasa.gov/image/${modalContent.nasa_id}/${modalContent.nasa_id}~thumb.jpg`}
              />
            </>
          ) : (
            <>
              <video width="100%" height="auto" controls>
                <source
                  src={`https://images-assets.nasa.gov/video/${modalContent.nasa_id}/${modalContent.nasa_id}~small.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </Modal.Content>
      </Modal>
      {loading ? <Loader active inline="centered" size="large" inverted /> : ""}

      <div className={loading ? "results opc" : "results"}>
        <div className="row">
          {result?.map((item: any) => {
            const { data } = item;
            return data?.map(
              (item: {
                nasa_id: string;
                title: string;
                media_type: string;
              }) => {
                const { nasa_id, title, media_type } = item;
                return (
                  <>
                    <Col4
                      key={String(nasa_id)}
                      className={`nasa-item ${nasa_id}`}
                    >
                      <img
                        src={`https://images-assets.nasa.gov/${media_type}/${nasa_id}/${nasa_id}~thumb.jpg`}
                        alt={title}
                        className="image"
                        onClick={() =>
                          inputModalContent(title, nasa_id, media_type)
                        }
                      />

                      <div className="overlay">
                        <div className="text">{title}</div>
                      </div>
                    </Col4>
                  </>
                );
              }
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Results;
