export function scrollToBottom() {
    const scrollingElement = document.scrollingElement || document.body
    // scrollingElement.scrollTop = scrollingElement.scrollHeight
    window.scrollTo({ top: scrollingElement.scrollHeight, behavior: 'smooth' })
}