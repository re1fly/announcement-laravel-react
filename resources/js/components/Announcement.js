import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Card} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import axios from "axios";
import DashboardTemplate from "../containers/templates/Dashboard";

export default function Announcement() {
    const [wysiwyg, setWysiwyg] = useState("");
    const [parsed, setParsed] = useState("");

    const [title, setTitle] = useState("");

    const handleEditorChange = content => {
        setWysiwyg(content);
        setParsed(content);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            'title' : title,
            'content' : parsed,
        };
        const token = localStorage.getItem('access_token');
        axios.post('http://localhost:8000/api/auth/announcement/create', data,{
            headers: {
                'Authorization': `Bearer ${token}`
            },

        }).then(response => {
            if (response.status === 200){
                console.log('success input data');
            }else{
                console.log('failed');
            }
        }).catch(() => {
            console.log('failed input data');
        });
    }
        return (
            <DashboardTemplate>
                <form onSubmit={handleSubmit} noValidate>
                <h3 className="mb-5 mt-4 text-center">Preview Announcement</h3>
                <Card className="mb-4" style={{borderColor: "black", borderWidth:"3px", height:"400px" }}>
                    <div className="wysiwyg">{wysiwyg && ReactHtmlParser(wysiwyg)}</div>
                    </Card>
                <Card className="text-center" style={{ marginBottom: "10%", width: "70%", marginLeft:"15%", border: "none" }}>
                    <TextField id="outlined-basic"
                               label="Announcement Name"
                               variant="outlined"
                               value={title}
                               onInput={ e=>setTitle(e.target.value)}
                    />
                    <Box mb={4} />
            <Editor
                apiKey="ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a"
                init={{
                    height: 200,
                    selector: 'textarea',
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount',
                        'preview'
                    ],
                    menubar: 'file edit view insert format tools table tc help',
                    toolbar:
                        'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                }}
                onEditorChange={handleEditorChange}
            />
                    <Box mt={4} />
                    <Button type="submit" variant="contained">Save Announcement</Button>
                </Card>
                </form>
            </DashboardTemplate>
        );
}
