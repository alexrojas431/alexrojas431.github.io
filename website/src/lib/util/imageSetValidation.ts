import { ImageSetInterface } from "@/interface/imageSetInterfaces";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  INVALID_CREDITS_ERROR_MESSAGE,
  INVALID_INTERFACE_ERROR_MESSAGE,
  INVALID_STATICIMAGEDATA_OBJECT_ERROR_MESSAGE,
  INVALID_TYPE_ERROR_MESSAGE,
} from "@/util/globalConstants";

export function imageSetValidation(
  component: string,
  image: ImageSetInterface
): void {
  const hasValidKeys: boolean =
    typeof image === "object" &&
    "id" in image &&
    "src" in image &&
    "alt" in image;

  if (!hasValidKeys) {
    throw new Error(
      "\n" +
        component +
        ": " +
        INVALID_INTERFACE_ERROR_MESSAGE +
        " 'ImageSetInterface'.\n"
    );
  }

  const hasValidTypes: boolean =
    typeof image.id === "string" &&
    (typeof image.src === "string" || typeof image.src === "object") &&
    typeof image.alt === "string";

  if (!hasValidTypes) {
    throw new Error(
      "\n" +
        component +
        ": " +
        INVALID_TYPE_ERROR_MESSAGE +
        " 'ImageSetInterface'.\n"
    );
  }

  const isNotEmpty: boolean =
    image.id.length > 0 &&
    Object.keys(image.src).length > 0 &&
    image.alt.length > 0;

  if (!isNotEmpty) {
    throw new Error(
      "\n" +
        component +
        ": " +
        EMPTY_OBJECT_KEYS_ERROR_MESSAGE +
        " 'ImageSetInterface'.\n"
    );
  }

  let staticImage: boolean = true;
  if (typeof image.src === "object") {
    staticImage =
      typeof image.src.src === "string" &&
      typeof image.src.width === "number" &&
      typeof image.src.height === "number";
  }

  if (!staticImage) {
    throw new Error(
      "\n" +
        component +
        ": " +
        INVALID_STATICIMAGEDATA_OBJECT_ERROR_MESSAGE +
        "\n"
    );
  }

  const creditsExists: boolean = typeof image.credits === "string";
  const creditTitleExists: boolean = typeof image.creditTitle === "string";
  const creditLinkExists: boolean = typeof image.creditLink === "string";
  const creditItemsAlign: boolean =
    creditsExists === creditTitleExists && creditsExists === creditLinkExists;

  if (!creditItemsAlign) {
    throw new Error(
      "\n" + component + ": " + INVALID_CREDITS_ERROR_MESSAGE + "\n"
    );
  }
}
