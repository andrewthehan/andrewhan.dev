export interface ScrollIntoViewHorizontallyOptions {
  inline?: ScrollLogicalPosition;
  behavior?: ScrollBehavior;
}

/**
 * Scrolls an element into view horizontally within its specified scrollable container,
 * without affecting vertical scroll positions of the page or other containers.
 *
 * @param element The element to scroll into view.
 * @param scrollContainer The scrollable ancestor container
 * (this element must have CSS 'overflow-x: auto' or 'overflow-x: scroll').
 * @param options Optional parameters for alignment and behavior.
 */
export function scrollIntoViewHorizontally(
  element: HTMLElement,
  scrollContainer: HTMLElement,
  options: ScrollIntoViewHorizontallyOptions = {},
) {
  if (!element || !scrollContainer) {
    console.warn("Element or scrollContainer not provided.");
    return;
  }

  const defaultOptions: ScrollIntoViewHorizontallyOptions = {
    inline: "nearest",
    behavior: "auto",
  };
  const mergedOptions: ScrollIntoViewHorizontallyOptions = { ...defaultOptions, ...options };

  const elementRect = element.getBoundingClientRect();
  const scrollContainerRect = scrollContainer.getBoundingClientRect();

  const style = window.getComputedStyle(scrollContainer);
  if (style.overflowX !== "auto" && style.overflowX !== "scroll") {
    console.warn("scrollContainer does not have CSS overflow-x: auto or scroll.");
    return;
  }

  let newScrollLeft = scrollContainer.scrollLeft;

  const scrollContainerClientWidth = scrollContainer.clientWidth;

  switch (mergedOptions.inline) {
    case "start":
      newScrollLeft = scrollContainer.scrollLeft + (elementRect.left - scrollContainerRect.left);
      break;
    case "end":
      newScrollLeft =
        scrollContainer.scrollLeft +
        (elementRect.right - (scrollContainerRect.left + scrollContainerClientWidth));
      break;
    case "center":
      const elementCenterInViewport = elementRect.left + elementRect.width / 2;
      const scrollContainerVisibleCenterInViewport =
        scrollContainerRect.left + scrollContainerClientWidth / 2;
      newScrollLeft =
        scrollContainer.scrollLeft +
        (elementCenterInViewport - scrollContainerVisibleCenterInViewport);
      break;
    case "nearest":
    default:
      const isLeftEdgeVisible = elementRect.left >= scrollContainerRect.left;
      const isRightEdgeVisible =
        elementRect.right <= scrollContainerRect.left + scrollContainerClientWidth;

      if (isLeftEdgeVisible && isRightEdgeVisible) {
        return;
      }

      if (elementRect.left < scrollContainerRect.left) {
        newScrollLeft = scrollContainer.scrollLeft + (elementRect.left - scrollContainerRect.left);
      } else if (elementRect.right > scrollContainerRect.left + scrollContainerClientWidth) {
        newScrollLeft =
          scrollContainer.scrollLeft +
          (elementRect.right - (scrollContainerRect.left + scrollContainerClientWidth));
      }
      break;
  }

  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainerClientWidth;
  newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));

  if (scrollContainer.scrollTo) {
    scrollContainer.scrollTo({
      left: newScrollLeft,
      behavior: mergedOptions.behavior,
    });
  } else {
    scrollContainer.scrollLeft = newScrollLeft;
  }
}
