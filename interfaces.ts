export interface Document {
  id: number;
  title: string;
  content: string;
  author: string;
  dateCreated: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface QuillContent {
  quillText: string;
  quillInnerHTML: string;
}
