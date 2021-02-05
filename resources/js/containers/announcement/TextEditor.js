import {Editor} from "@tinymce/tinymce-react";
import React from "react";

export function TextEditor(props) {
    return <Editor
        apiKey='ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a'
        init={{
            height: 200,
            selector: 'textarea#full-featured-non-premium',
            plugins: [
                'print preview paste importcss searchreplace autolink autosave directionality code ' +
                'visualblocks visualchars fullscreen image link media template codesample table charmap ' +
                'hr pagebreak nonbreaking textcolor colorpicker anchor toc insertdatetime advlist lists' +
                ' wordcount imagetools textpattern noneditable help charmap emoticons image code'
            ],
            menubar: 'file edit view insert format tools table tc help',
            toolbar:
                ' a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed' +
                ' permanentpen table | link image | undo redo | bold italic underline strikethrough | ' +
                'forecolor backcolor | fontselect fontsizeselect formatselect | ' +
                'alignleft aligncenter alignright alignjustify | outdent indent |' +
                '  numlist bullist checklist | ' +
                'forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            toolbar_mode: 'floating',
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            media_live_embeds: true,
            paste_data_images: true,
            audio_template_callback: function (data) {
                return '<audio controls>' + '\n<source src="' + data.source1 + '"' +
                    (data.source1mime ? ' type="' + data.source1mime + '"' : '') +
                    ' />\n' +
                    '</audio>';
            },
            /* and here's our custom image picker*/
            file_picker_callback: function (cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.onchange = function () {
                    var file = this.files[0];

                    var reader = new FileReader();
                    reader.onload = function () {
                        /*
                          Note: Now we need to register the blob in TinyMCEs image blob
                          registry. In the next release this part hopefully won't be
                          necessary, as we are looking to handle it internally.
                        */
                        var id = 'blobid' + (new Date()).getTime();
                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                        var base64 = reader.result.split(',')[1];
                        var blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);

                        /* call the callback and populate the Title field with the file name */
                        cb(blobInfo.blobUri(), {title: file.name});
                    };
                    reader.readAsDataURL(file);
                };

                input.click();
            },
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'

        }}
        onEditorChange={handleEditorChange}
    />
}
