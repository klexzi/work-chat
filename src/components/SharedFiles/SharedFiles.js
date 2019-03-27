import React from "react";
import Faker from "faker";
import SharedFile from "../SharedFile/SharedFile";

import "./SharedFiles.scss";
let files = [];
for (let i = 1; i < 6; i++) {
  files.push({
    imageUrl: Faker.image.avatar(),
    name: Faker.name.firstName() + " " + Faker.name.lastName(),
    fileName: Faker.random.word() + ".png",
    date: Faker.date.recent()
  });
}

const SharedFiles = () => {
  return (
    <div className="">
      {files.length < 1 ? (
        <div
          style={{ height: "25vh" }}
          className="row align-items-center justify-content-center"
        >
          <p className="info-text">No shared files</p>
        </div>
      ) : (
        <React.Fragment>
          <h5 className="h5 info-text">Shared Files</h5>
          <div className="shared-files">
            {files.map((file, i) => (
              <SharedFile {...file} key={i} />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default SharedFiles;
