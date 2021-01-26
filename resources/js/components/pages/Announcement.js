import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class Announcement extends React.Component {
    handleEditorChange = (e) => {
        console.log(
            'Content was updated:',
            e.target.getContent()
        );
    }

    render() {
        return (
            <Editor
                apiKey="ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a"
                initialValue="<p>Initial content</p>"
                init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help'
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}

export default Announcement;
