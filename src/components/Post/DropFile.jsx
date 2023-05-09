import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FileUpload() {
  const [fileList, setFileList] = useState([]);
  const [previewSrc, setPreviewSrc] = useState("");
  
  const movePage = useNavigate();

  function godetail(){
    movePage('/detail');
  }

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("highlight");
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("highlight");
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("highlight");

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }

  function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    handleFiles(files);
  }

  function handleFiles(files) {
    const updatedFiles = [...fileList, ...files];
    setFileList(updatedFiles);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
    });
  }

  return (
    <div id="root" style={{ width: "90%", margin: "0 auto", maxWidth: "800px" }}>
    
      <div className="contents" style={{ display: "flex", flexDirection: "row", marginTop: "30px" , justifyContent: "center"}}>
        <div
          className="upload-box"
          style={{ width: "60%", marginRight: "30px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div id="drop-file" className="drag-file" style={{ position: "relative", width: "100%", height: "360px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "3px dashed #dbdbdb" }}>
            <img src="https://img.icons8.com/pastel-glyph/2x/image-file.png" alt="파일 아이콘" className="image" style={{ width: "40px" }} />
            <p className="message" style={{ marginBottom: 0, color: "#4b4b4b" }}>
              Drag files to upload
            </p>
            {previewSrc && <img src={previewSrc} alt="미리보기 이미지" className="preview" style={{ display: "block", position: "absolute", left: 0, height: 0, width: "100%", height: "100%" }} />}
          </div>
          <label className="file-label" htmlFor="chooseFile" 
          style={{ marginTop: "30px", backgroundColor: "white", color: "#8886ae", textAlign: "center", padding: "10px 0", width: "50%", borderRadius: "6px", cursor: "pointer", border: "2px solid #8886ae",  }}>
            파일 선택하기
          </label >
          <label onClick={godetail} style={{ marginTop: "10px", backgroundColor: "#8886ae", color: "#ffffff", textAlign: "center", padding: "10px 0", width: "50%", borderRadius: "6px", cursor: "pointer" }}>등록하기</label>
          <input className="file" id="chooseFile" type="file" onChange={handleFileSelect} accept="image/png, image/jpeg, image/gif" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  );
}

export default FileUpload;

