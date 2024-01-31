"use client";

import { ChangeEvent, useState } from "react";

export function CoverPicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setPreview(previewURL);
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="avatar_url"
        id="avatar_url"
        accept="image/*"
        required
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="w-40 h-40 aspect-video rounded-lg object-cover"
        />
      )}
    </>
  );
}
