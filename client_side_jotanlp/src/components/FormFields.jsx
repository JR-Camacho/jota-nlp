import { useRef, useState } from "react";

import { Textarea, Button, IconButton } from "@material-tailwind/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { ArrowUp, Check } from "heroicons-react";

const FormFields = ({
  textName,
  fileName,
  label,
  textValue,
  setTextValue,
  setFileValue,
  handleClick,
  loading,
}) => {
  const fileInputRef = useRef(null);

  const [isSelectedFile, setIsSelectedFile] = useState(false);

  const handleSetTextData = (e) => {
    setTextValue({ [textName]: e.target.value });

    if (fileName) {
      setFileValue({ [fileName]: null });
      setIsSelectedFile(false);
    }
  };

  const handleSetFileData = (e) => {
    setFileValue({ [fileName]: e.target.files[0] });
    setTextValue({ [textName]: "" });
    setIsSelectedFile(true);
  };

  const handleCopyClick = () =>
    navigator.clipboard.writeText(textValue[textName]);

  const clear = () => {
    setTextValue({ [textName]: "" });
    if (fileName) {
      setFileValue({ [fileName]: null });
      setIsSelectedFile(false);
    }
  };

  const handleOpenFileInput = () => {
    fileInputRef.current.click();
    fileInputRef.current.value = null;
  };

  return (
    <div className="w-full h-full flex flex-col justify-between lg:rounded-l-2xl p-2 bg-black">
      <Textarea
        size="md"
        className="text-white"
        label={label}
        rows={10.5}
        value={textValue[textName]}
        name={textName}
        onChange={(e) => handleSetTextData(e)}
      />
      <div className="w-full flex justify-between py-1.5">
        <div className="flex gap-2">
          <IconButton
            variant="text"
            color="blue-gray"
            size="sm"
            onClick={handleCopyClick}
          >
            <LinkIcon strokeWidth={2} className="w-4 h-4" />
          </IconButton>
          {fileName && (
            <div>
              <Button
                onClick={handleOpenFileInput}
                className={`rounded-md p-2 ml-2 border-none flex items-center ${
                  isSelectedFile && "text-green-500 focus:ring-green-200"
                }`}
                variant="outlined"
              >
                {isSelectedFile ? "Selected File" : "Upload File"}
                {isSelectedFile ? (
                  <Check height={20} width={20} />
                ) : (
                  <ArrowUp height={20} width={20} />
                )}
              </Button>
              <input
                type="file"
                accept=".txt,.eml"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => handleSetFileData(e)}
                name={fileName}
              />
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            color="red"
            variant="text"
            className="rounded-md"
            onClick={clear}
          >
            Clear
          </Button>
          <Button
            size="sm"
            className="rounded-md"
            onClick={handleClick}
            disabled={loading}
          >
            Analyze
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormFields;
