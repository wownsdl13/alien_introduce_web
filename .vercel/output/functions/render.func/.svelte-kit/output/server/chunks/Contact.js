import { c as create_ssr_component, a as subscribe, f as each, b as add_attribute, e as escape } from "./index2.js";
import { a as $format } from "./i18n.js";
const Contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contact-container.svelte-1flvt0r.svelte-1flvt0r{text-align:center;margin:20px auto;padding:0 20px;max-width:700px}.contact-title.svelte-1flvt0r.svelte-1flvt0r{font-size:clamp(2rem, 7.5vw + 1rem, 2.8rem);margin-bottom:40px}.contact-list.svelte-1flvt0r.svelte-1flvt0r{display:flex;flex-direction:column;align-items:center;gap:30px}.contact-item-wrapper.svelte-1flvt0r.svelte-1flvt0r{display:flex;flex-direction:column;align-items:center}.contact-item.svelte-1flvt0r.svelte-1flvt0r{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit;font-size:clamp(1rem, 3.5vw + 1rem, 1.3rem);transition:transform 0.3s ease, color 0.3s ease;cursor:pointer}.contact-item.svelte-1flvt0r.svelte-1flvt0r:hover{transform:scale(1.1);color:#0073e6}.contact-icon.svelte-1flvt0r.svelte-1flvt0r{width:35px;height:35px;transition:transform 0.3s ease}.contact-item.svelte-1flvt0r:hover .contact-icon.svelte-1flvt0r{transform:scale(1.03)}.contact-description.svelte-1flvt0r.svelte-1flvt0r{font-size:clamp(0.8rem, 2vw + 0.5rem, 1.1rem);color:darkgrey;margin-top:5px;text-align:center}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { lang } = $$props;
  let contacts = [
    {
      type: "YouTube",
      url: "https://www.youtube.com/@AlienApp",
      icon: "/icons/youtube.png",
      description: $_("우리 부부의 일상과 앱 개발등을 올리는 곳")
    },
    {
      type: "Threads",
      url: "",
      icon: "/icons/threads.png",
      description: $_("앱 개발 기록 & 국제커플에 대한 의견")
    },
    {
      type: "X (Twitter)",
      url: "https://www.threads.net/@alien_application.global",
      icon: "/icons/x.png",
      description: $_("앱 개발 기록 & 국제커플에 대한 의견 (영어)")
    },
    {
      type: "Email",
      url: "contact@alien-app.com",
      // 'mailto:' 부분을 제거하여 순수 이메일 주소를 보이게 함
      icon: "/icons/email.png",
      description: $_("비즈니스 문의 및 궁금증은 여기로")
    }
  ];
  function updateContacts(lang2) {
    contacts = contacts.map((contact) => {
      if (contact.type === "Threads") {
        return {
          ...contact,
          url: lang2.startsWith("ko") ? "https://www.threads.net/@alien_application" : "https://www.threads.net/@alien_application.global"
        };
      }
      return contact;
    });
  }
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  $$result.css.add(css);
  {
    {
      updateContacts(lang);
    }
  }
  $$unsubscribe__();
  return `<div class="contact-container svelte-1flvt0r"><h1 class="contact-title svelte-1flvt0r">SNS &amp; Contact</h1>
    <div class="contact-list svelte-1flvt0r">${each(contacts, (contact) => {
    return `<div class="contact-item-wrapper svelte-1flvt0r">${contact.type === "Email" ? `<div class="contact-item svelte-1flvt0r"><img${add_attribute("src", contact.icon, 0)}${add_attribute("alt", contact.type, 0)} class="contact-icon svelte-1flvt0r">
                        <span>${escape(contact.url)}</span> 
                    </div>` : `<a${add_attribute("href", contact.url, 0)} target="_blank" class="contact-item svelte-1flvt0r"><img${add_attribute("src", contact.icon, 0)}${add_attribute("alt", contact.type, 0)} class="contact-icon svelte-1flvt0r">
                        <span>${escape(contact.type)}</span>
                    </a>`}
                <p class="contact-description svelte-1flvt0r">${escape(contact.description)}</p>
            </div>`;
  })}</div>
</div>`;
});
export {
  Contact as C
};
