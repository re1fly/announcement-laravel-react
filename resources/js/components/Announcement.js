import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Button, Card} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

export default function Announcement() {
    const [wysiwyg, setWysiwyg] = useState("");
    const [parsed, setParsed] = useState("");

    const handleEditorChange = content => {
        setWysiwyg(content);
        setParsed(content);
    };
        return (
            <Card style={{border: "none"}}>
                <h3 className="mb-5 mt-4 text-center">Preview Announcement</h3>
                <Card className="mb-4" style={{borderColor: "black", borderWidth:"3px", height:"400px" }}>
                    <div className="wysiwyg">{wysiwyg && ReactHtmlParser(wysiwyg)}</div>
                    </Card>
                <Card className="text-center" style={{ marginBottom: "10%", width: "50%", marginLeft:"25%", border: "none" }}>
            <Editor
                apiKey="ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a"
                initialValue="<p>Initial content</p>"
                init={{
                    height: 200,
                    selector: 'textarea',
                    // menubar: 'view',
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount',
                        'preview'
                    ],
                    toolbar:
                    'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'
                }}
                onEditorChange={handleEditorChange}
            />
                    <Button  className="mt-4" variant="secondary" type="submit" >
                        Save Announcement
                    </Button>
                </Card>
            </Card>
        );
}
