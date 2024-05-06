import { FloatingLabel, Button, FileInput, Label } from "flowbite-react";

export const FloatLabel = () => {
    return (
        <div className="grid grid-flow-row justify-stretch space-y-4 font-mono">
            <FloatingLabel
                variant="outlined"
                label="Name"
                value={"Nikka"}
                disabled
            />
            <FloatingLabel variant="outlined" label="Surname" />
            <FloatingLabel variant="outlined" label="Email" />
            <Label
                htmlFor="small-file-upload"
                value="Upload Your avatar image"
            />
            <FileInput id="small-file-upload" sizing="sm" />
            <Button color="warning" pill>
                Save changes
            </Button>
        </div>
    );
};
