// @ts-nocheck
import { Slider, Switch } from "antd";

import { EditingData } from "./useEditingDatas";

type MenuData = Omit<EditingData, "src">;

type ImageEditorMenuProps = {
  data: MenuData;
  onChange: (data: MenuData) => void;
};

export default function ImageEditorMenu({
  data,
  onChange,
}: ImageEditorMenuProps) {
  if (!data) {
    return null;
  }

  return (
    <>
      <div style={{ maxWidth: "540px" }}>
        Sharpnes
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(clarity: number) => onChange({ ...data, clarity })}
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Exposure
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(exposure: number) => onChange({ ...data, exposure })}
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Brightness
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(brightness: number) =>
            onChange({ ...data, brightness })
          }
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        White Balance
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(whitebalance: number) =>
            onChange({ ...data, whitebalance })
          }
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Contrast
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(contrast: number) => onChange({ ...data, contrast })}
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Temparature
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(temparature: number) =>
            onChange({ ...data, temparature })
          }
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Hue
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(hue: number) => onChange({ ...data, hue })}
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Saturation
        <Slider
          defaultValue={50}
          min={0}
          max={100}
          onAfterChange={(saturation: number) =>
            onChange({ ...data, saturation })
          }
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Add Filter - Vintage
        <Switch
          checked={data.filter === "vintage"}
          onChange={(to) => {
            onChange({ ...data, filter: to ? "vintage" : null });
          }}
        />
      </div>
      <div style={{ maxWidth: "540px" }}>
        Add Filter - Black & White
        <Switch
          checked={data.filter === "grayscale"}
          onChange={(to) => {
            onChange({ ...data, filter: to ? "grayscale" : null });
          }}
        />
      </div>
    </>
  );
}
