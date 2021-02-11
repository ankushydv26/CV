import React, { useRef, useState } from 'react';

export default function CopyExample() {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";


    e.target.focus();
    setCopySuccess('!!!!!!!');
  };

  return (
    <div  style={{display:'flex'}}>
        <strong style={{marginRight:'5px'}}>Email id :</strong>
      <form>
        <textarea
          ref={textAreaRef}
          defaultValue='Tankush027@gmail.com'
        />
       </form> 
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div style={{marginLeft:'10px'}}>
          <button className="tooltip" id='myTooltip' onClick={copyToClipboard}>Copy</button> 
          {copySuccess}
        </div>
      }
    </div>
  );
}