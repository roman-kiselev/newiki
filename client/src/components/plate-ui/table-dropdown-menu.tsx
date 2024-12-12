"use client";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

import { someNode } from "@udecode/plate-common";
import {
    focusEditor,
    useEditorPlugin,
    useEditorSelector,
} from "@udecode/plate-common/react";
import { deleteTable, insertTableRow } from "@udecode/plate-table";
import {
    TablePlugin,
    deleteColumn,
    deleteRow,
    insertTable,
} from "@udecode/plate-table/react";
import {
    Minus,
    Plus,
    RectangleHorizontal,
    RectangleVertical,
    Table,
    Trash,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    useOpenState,
} from "./dropdown-menu";
import { ToolbarButton } from "./toolbar";

export function TableDropdownMenu(props: DropdownMenuProps) {
    const tableSelected = useEditorSelector(
        (editor) => someNode(editor, { match: { type: TablePlugin.key } }),
        []
    );

    const { editor, tf } = useEditorPlugin(TablePlugin);

    const openState = useOpenState();

    return (
        <DropdownMenu modal={false} {...openState} {...props}>
            <DropdownMenuTrigger asChild>
                <ToolbarButton
                    pressed={openState.open}
                    tooltip="Таблица"
                    isDropdown
                >
                    <Table />
                </ToolbarButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="flex w-[180px] min-w-0 flex-col"
                align="start"
            >
                <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Table />
                            <span>Таблица</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                className="min-w-[180px]"
                                onSelect={() => {
                                    insertTable(editor, {}, { select: true });
                                    focusEditor(editor);
                                }}
                            >
                                <Plus />
                                Вставить таблицу
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="min-w-[180px]"
                                disabled={!tableSelected}
                                onSelect={() => {
                                    deleteTable(editor);
                                    focusEditor(editor);
                                }}
                            >
                                <Trash />
                                Удалить таблицу
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger disabled={!tableSelected}>
                            <RectangleVertical />
                            <span>Колонка</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                className="min-w-[180px]"
                                disabled={!tableSelected}
                                onSelect={() => {
                                    tf.insert.tableColumn();
                                    focusEditor(editor);
                                }}
                            >
                                <Plus />
                                Вставить столбец после
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="min-w-[180px]"
                                disabled={!tableSelected}
                                onSelect={() => {
                                    deleteColumn(editor);
                                    focusEditor(editor);
                                }}
                            >
                                <Minus />
                                Удалить столбец
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger disabled={!tableSelected}>
                            <RectangleHorizontal />
                            <span>Строка</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                className="min-w-[180px]"
                                disabled={!tableSelected}
                                onSelect={() => {
                                    insertTableRow(editor);
                                    focusEditor(editor);
                                }}
                            >
                                <Plus />
                                Вставить строку после
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="min-w-[180px]"
                                disabled={!tableSelected}
                                onSelect={() => {
                                    deleteRow(editor);
                                    focusEditor(editor);
                                }}
                            >
                                <Minus />
                                Удалить строку
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
