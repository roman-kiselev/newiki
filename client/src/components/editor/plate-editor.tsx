import { Plate } from "@udecode/plate-common/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Editor, EditorContainer } from "../plate-ui/editor";
import { useCreateEditor } from "./use-create-editor";

// import {
//     ParagraphPlugin,
//     Plate,
//     PlateLeaf,
//     usePlateEditor,
// } from "@udecode/plate-common/react";

// import { SettingsDialog } from "@/components/editor/settings";
// import { Editor, EditorContainer } from "@/components/plate-ui/editor";
// import { withProps } from "@udecode/cn";
// import { AlignPlugin } from "@udecode/plate-alignment/react";
// import { AutoformatPlugin } from "@udecode/plate-autoformat/react";
// import {
//     BoldPlugin,
//     CodePlugin,
//     ItalicPlugin,
//     StrikethroughPlugin,
//     SubscriptPlugin,
//     SuperscriptPlugin,
//     UnderlinePlugin,
// } from "@udecode/plate-basic-marks/react";
// import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
// import { ExitBreakPlugin, SoftBreakPlugin } from "@udecode/plate-break/react";
// import { CaptionPlugin } from "@udecode/plate-caption/react";
// import {
//     CodeBlockPlugin,
//     CodeLinePlugin,
//     CodeSyntaxPlugin,
// } from "@udecode/plate-code-block/react";
// import { CommentsPlugin } from "@udecode/plate-comments/react";
// import { DatePlugin } from "@udecode/plate-date/react";
// import { DndPlugin } from "@udecode/plate-dnd";
// import { DocxPlugin } from "@udecode/plate-docx";
// import { EmojiPlugin } from "@udecode/plate-emoji/react";
// import { ExcalidrawPlugin } from "@udecode/plate-excalidraw/react";
// import {
//     FontBackgroundColorPlugin,
//     FontColorPlugin,
//     FontSizePlugin,
// } from "@udecode/plate-font/react";
// import { HEADING_KEYS } from "@udecode/plate-heading";
// import { HeadingPlugin, TocPlugin } from "@udecode/plate-heading/react";
// import { HighlightPlugin } from "@udecode/plate-highlight/react";
// import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
// import { IndentListPlugin } from "@udecode/plate-indent-list/react";
// import { IndentPlugin } from "@udecode/plate-indent/react";
// import { JuicePlugin } from "@udecode/plate-juice";
// import { KbdPlugin } from "@udecode/plate-kbd/react";
// import { ColumnItemPlugin, ColumnPlugin } from "@udecode/plate-layout/react";
// import { LineHeightPlugin } from "@udecode/plate-line-height/react";
// import { LinkPlugin } from "@udecode/plate-link/react";
// import { MarkdownPlugin } from "@udecode/plate-markdown";
// import {
//     ImagePlugin,
//     MediaEmbedPlugin,
//     PlaceholderPlugin,
// } from "@udecode/plate-media/react";
// import {
//     MentionInputPlugin,
//     MentionPlugin,
// } from "@udecode/plate-mention/react";
// import { NodeIdPlugin } from "@udecode/plate-node-id";
// import { ResetNodePlugin } from "@udecode/plate-reset-node/react";
// import { DeletePlugin } from "@udecode/plate-select";
// import {
//     BlockMenuPlugin,
//     BlockSelectionPlugin,
//     CursorOverlayPlugin,
// } from "@udecode/plate-selection/react";
// import { SlashPlugin } from "@udecode/plate-slash-command/react";
// import {
//     TableCellHeaderPlugin,
//     TableCellPlugin,
//     TablePlugin,
//     TableRowPlugin,
// } from "@udecode/plate-table/react";
// import { TogglePlugin } from "@udecode/plate-toggle/react";
// import { TrailingBlockPlugin } from "@udecode/plate-trailing-block";
// import { BlockquoteElement } from "../plate-ui/blockquote-element";
// import { CodeBlockElement } from "../plate-ui/code-block-element";
// import { CodeLeaf } from "../plate-ui/code-leaf";
// import { CodeLineElement } from "../plate-ui/code-line-element";
// import { CodeSyntaxLeaf } from "../plate-ui/code-syntax-leaf";
// import { ColumnElement } from "../plate-ui/column-element";
// import { ColumnGroupElement } from "../plate-ui/column-group-element";
// import { CommentLeaf } from "../plate-ui/comment-leaf";
// import { CommentsPopover } from "../plate-ui/comments-popover";
// import { CursorOverlay } from "../plate-ui/cursor-overlay";
// import { DateElement } from "../plate-ui/date-element";
// import { ExcalidrawElement } from "../plate-ui/excalidraw-element";
// import { HeadingElement } from "../plate-ui/heading-element";
// import { HighlightLeaf } from "../plate-ui/highlight-leaf";
// import { HrElement } from "../plate-ui/hr-element";
// import { ImageElement } from "../plate-ui/image-element";
// import { KbdLeaf } from "../plate-ui/kbd-leaf";
// import { LinkElement } from "../plate-ui/link-element";
// import { LinkFloatingToolbar } from "../plate-ui/link-floating-toolbar";
// import { MediaEmbedElement } from "../plate-ui/media-embed-element";
// import { MentionElement } from "../plate-ui/mention-element";
// import { MentionInputElement } from "../plate-ui/mention-input-element";
// import { ParagraphElement } from "../plate-ui/paragraph-element";
// import { withPlaceholders } from "../plate-ui/placeholder";
// import {
//     TableCellElement,
//     TableCellHeaderElement,
// } from "../plate-ui/table-cell-element";
// import { TableElement } from "../plate-ui/table-element";
// import { TableRowElement } from "../plate-ui/table-row-element";
// import { ToggleElement } from "../plate-ui/toggle-element";
// import { withDraggables } from "../plate-ui/with-draggables";
// import { FixedToolbarPlugin } from "./plugins/fixed-toolbar-plugin";
// import { FloatingToolbarPlugin } from "./plugins/floating-toolbar-plugin";

export function PlateEditor() {
    const editor = useCreateEditor();

    // const [editorState, setEditorState] = useState(editor.value); // Состояние для хранения данных редактора

    // useEffect(() => {
    //     // Загрузка данных из localStorage при монтировании компонента
    //     const savedState = localStorage.getItem("plateEditorState");
    //     if (savedState) {
    //         setEditorState(JSON.parse(savedState));
    //     }

    //     // Сохранение данных в localStorage при изменении состояния редактора
    //     return () => {
    //         localStorage.setItem(
    //             "plateEditorState",
    //             JSON.stringify(editor.value)
    //         );
    //     };
    // }, [editor.value]);

    return (
        <DndProvider backend={HTML5Backend}>
            <Plate editor={editor}>
                {/* <FixedToolbar>
                    <FixedToolbarButtons />
                </FixedToolbar> */}
                <EditorContainer>
                    <Editor variant={"default"} />
                </EditorContainer>

                {/* <SettingsDialog /> */}
            </Plate>
        </DndProvider>
    );
}
