<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

<textarea type="text" id="description" name='description' class="form-control" placeholder="Enter Description" style="min-height: 250px;"></textarea>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>