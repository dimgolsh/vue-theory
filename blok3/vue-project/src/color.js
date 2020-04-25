export default {
  bind(el, bindings, vnode) {
    console.log("bind");
    // el.style.color = 'red'
    const arg = bindings.arg;
    el.style[arg] = bindings.value;

    const fontMod = bindings.modifiers["font"];
    if (fontMod) {
      el.style.fontSize = "40px";
    }

    const delayMod = bindings.modifiers["delay"];
    let delay = 0;
    if (delayMod) {
      delay = 2000;
    }

    setTimeout(() => {
      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay);
  },
  
  inserted(el, bindings, vnode) {
    console.log("inserted");
  },
  update(el, bindings, vnode, oldVnode) {
    console.log("update");
  },
  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log("componentUpdated");
  },
  unbind() {
    console.log("unbind");
  }
};
