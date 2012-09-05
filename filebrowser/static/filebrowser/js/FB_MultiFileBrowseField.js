function FileSubmitMultiple(FileURL, ThumbURL, FileType) {
    // var input_id=window.name.split("___").join(".");
    var input_id=window.name.replace(/____/g,'-').split("___").join(".");
    var preview_id = 'image_' + input_id;
    var link_id = 'link_' + input_id;
    var help_id = 'help_' + input_id;
    input = opener.document.getElementById(input_id);
    help = opener.document.getElementById(help_id);
    
    var current_value = input.value;
    if(current_value != ''){
        input.value = current_value +','+FileURL;
    }else{
        input.value = FileURL;
    }
    
    if (ThumbURL && FileType != "") {
        // selected file is an image and thumbnail is available:
        // display the preview-image (thumbnail)
        // link the preview-image to the original image
        help.setAttribute("style", "display:block");
        help.innerHTML += '<a href="javascript:;">\
                        <img src="'+ThumbURL+'" class="preview" rel="'+FileURL+'"/>\
                        </a>';
                        
    }
    //this.close();
}

