import { PlateEditor } from "@/components/editor/plate-editor";
import { SettingsProvider } from "@/components/editor/settings";
import { Toaster } from "sonner";

const CreateArticle = () => {
    return (
        <div className="h-screen w-full" data-registry="plate">
            <SettingsProvider>
                <PlateEditor />
            </SettingsProvider>
            <Toaster />
        </div>
    );
};

export default CreateArticle;
