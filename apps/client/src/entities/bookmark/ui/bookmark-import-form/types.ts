import { z } from "zod";

const ACCEPTED_IMPORT_FILE_TYPE = ["text/html"];

export const importBookmarkSchema = z.object({
  importFile: z
    .custom<File>((val) => val instanceof File, "Please upload a file")
    .refine((file) => ACCEPTED_IMPORT_FILE_TYPE.includes(file.type), {
      message: "Please choose .html format files only",
    }),
  collectionId: z.string().min(1, "Collection is required"),
});

export type ImportForm = z.infer<typeof importBookmarkSchema>;
