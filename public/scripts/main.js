const LAZY_LOADING_ATTR = 'data-src'
const LAZY_LOADING_SELECTOR = `[${LAZY_LOADING_ATTR}]`

const observeElements = (selector, cb) => {
  const options = {
    root: null,
    rootMargin: '0px 0px 400px 0px',
    threshold: 0,
  }

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => cb(entry, observer)),
    options,
  )

  document.querySelectorAll(selector).forEach((el) => observer.observe(el))
}

const onDOMContentLoadedScroll = () => {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll(LAZY_LOADING_SELECTOR).forEach((el) => {
      el.setAttribute('src', el.getAttribute(LAZY_LOADING_ATTR))
      el.removeAttribute('data-src')
    })
  } else {
    observeElements(LAZY_LOADING_SELECTOR, (entry, observer) => {
      if (entry.isIntersecting && entry.target.hasAttribute(LAZY_LOADING_ATTR)) {
        entry.target.setAttribute('src', entry.target.getAttribute(LAZY_LOADING_ATTR))
        entry.target.removeAttribute(LAZY_LOADING_ATTR)
        observer.unobserve(entry.target)
      }
    })
  }
}

window.addEventListener('DOMContentLoaded', onDOMContentLoadedScroll)
