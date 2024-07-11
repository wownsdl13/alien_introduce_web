import { c as create_ssr_component, a as subscribe, f as each, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { a as $format } from "../../chunks/i18n.js";
import { C as Contact } from "../../chunks/Contact.js";
const Downloads_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".responsive-images.svelte-1c9rla1{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:13px;margin:20px 0}.responsive-image.svelte-1c9rla1{width:100%;max-width:200px;cursor:pointer}.completion-message.svelte-1c9rla1{font-size:1.3rem;color:darkgrey;text-align:center;margin-top:10px}@media(min-width: 600px){.responsive-images.svelte-1c9rla1{flex-direction:row}}@media(max-width: 599px){.responsive-images.svelte-1c9rla1{margin-top:35px;flex-direction:column}}",
  map: null
};
const Downloads = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { images = [
    { src: "/images/apple.png", alt: "Apple" },
    { src: "/images/google.png", alt: "Google" }
  ] } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  $$result.css.add(css$5);
  $$unsubscribe__();
  return `<div class="responsive-images svelte-1c9rla1">${each(images, (image) => {
    return `<img${add_attribute("src", image.src, 0)}${add_attribute("alt", image.alt, 0)} class="responsive-image svelte-1c9rla1">`;
  })}</div>

<p class="completion-message svelte-1c9rla1">${escape($_("※ 곧 앱이 완성돼요!"))}</p>`;
});
const FadeIn_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".fade-in.svelte-l3wkhz{opacity:0;animation:svelte-l3wkhz-fadeIn var(--duration) ease-out var(--delay) forwards}@keyframes svelte-l3wkhz-fadeIn{from{transform:translateY(-15px);opacity:0}to{transform:translateY(0);opacity:1}}",
  map: null
};
const FadeIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = "1s" } = $$props;
  let { delay = "0s" } = $$props;
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  $$result.css.add(css$4);
  return `<div class="fade-in svelte-l3wkhz" style="${"--duration: " + escape(duration, true) + "; --delay: " + escape(delay, true)}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Youtube_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".thumbnail-container.svelte-10m5r40{text-align:center;margin:20px 0}.thumbnail-link.svelte-10m5r40{display:inline-block;text-decoration:none;color:inherit}.thumbnail-wrapper.svelte-10m5r40{position:relative;display:inline-block}.thumbnail-image.svelte-10m5r40{object-fit:cover;width:80%;max-width:1500px;border-radius:8px}.play-icon.svelte-10m5r40{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:rgba(0, 0, 0, 0.5);border-radius:50%;width:70px;height:70px;display:flex;justify-content:center;align-items:center}.description.svelte-10m5r40{text-align:center;font-size:clamp(1rem, 0.6vw + 1rem, 2rem);color:darkgrey;margin:5px 30px}",
  map: null
};
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videoId } = $$props;
  let { description } = $$props;
  if ($$props.videoId === void 0 && $$bindings.videoId && videoId !== void 0)
    $$bindings.videoId(videoId);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$3);
  return `<div class="thumbnail-container svelte-10m5r40"><a${add_attribute("href", `https://www.youtube.com/@AlienApp`, 0)} target="_blank" class="thumbnail-link svelte-10m5r40"><div class="thumbnail-wrapper svelte-10m5r40"><img${add_attribute("src", `https://img.youtube.com/vi/${videoId}/0.jpg`, 0)} alt="YouTube Thumbnail" class="thumbnail-image svelte-10m5r40">
            <div class="play-icon svelte-10m5r40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M8 5v14l11-7z" fill="white"></path></svg></div></div></a>
    <p class="description svelte-10m5r40">${escape(description)}</p>
</div>`;
});
const OurGoal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".our-goal-container.svelte-1lk89bj.svelte-1lk89bj{text-align:center;margin:20px auto;padding:0 20px;max-width:800px}.sub-goal-title.svelte-1lk89bj.svelte-1lk89bj{font-size:2.9rem;font-weight:bold;margin:0 10px 40px}.image-container.svelte-1lk89bj.svelte-1lk89bj{display:flex;justify-content:center;flex-direction:column;gap:20px;align-items:center;margin-bottom:20px}.small-icon-image.svelte-1lk89bj.svelte-1lk89bj{width:46%;height:auto;margin:0 0}.goal-list.svelte-1lk89bj.svelte-1lk89bj{text-align:left;font-size:2.2rem;line-height:1.6;color:#555;padding:0 20px;margin:10px auto}.goal-list.svelte-1lk89bj li.svelte-1lk89bj{margin-bottom:40px}@media(max-width: 600px){.goal-list.svelte-1lk89bj.svelte-1lk89bj{font-style:italic;font-size:1.25rem;line-height:2.05}}",
  map: null
};
const OurGoal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css$2);
  $$unsubscribe__();
  return `<div class="our-goal-container svelte-1lk89bj"><div class="image-container svelte-1lk89bj"><img src="/images/study.png" class="small-icon-image svelte-1lk89bj" alt=""></div>
    <h1 class="sub-goal-title svelte-1lk89bj">&#39;Alie Map&#39; is</h1>
    <ol class="goal-list svelte-1lk89bj"><li class="svelte-1lk89bj">${validate_component(FadeIn, "FadeIn").$$render($$result, {}, {}, {
    default: () => {
      return `1. <!-- HTML_TAG_START -->${$_("<b>'보수적인 공간이에요'</b>. 결혼을 하고, 행복한 가정을 꾸리기 위한 곳이요")}<!-- HTML_TAG_END -->`;
    }
  })}</li>
        <li class="svelte-1lk89bj">${validate_component(FadeIn, "FadeIn").$$render($$result, {}, {}, {
    default: () => {
      return `2. <!-- HTML_TAG_START -->${$_("우리의 목표는 짧은 인연이 아닌 <b>'평생의 인연을 찾을 수 있는 공간'</b>을 만들어주는 거에요")}<!-- HTML_TAG_END -->`;
    }
  })}</li>
        <li class="svelte-1lk89bj">${validate_component(FadeIn, "FadeIn").$$render($$result, {}, {}, {
    default: () => {
      return `3. <!-- HTML_TAG_START -->${$_("불건전하거나 좋지 않은 사람들로부터 <b>여러분들을 지켜주고 싶어요.</b> 이상한 사람들은 저희의 금전적인 이득과 상관없이 불이익이 있을꺼에요. 여기는 그런 곳이에요")}<!-- HTML_TAG_END -->`;
    }
  })}</li>
        <li class="svelte-1lk89bj">${validate_component(FadeIn, "FadeIn").$$render($$result, {}, {}, {
    default: () => {
      return `4. <!-- HTML_TAG_START -->${$_("<b>국제 부부의 장점을 널리 알리고 싶어요.</b> 장점들을 알려주고, 저희가 경험했던 놀라운 것들을 공유하고싶어요")}<!-- HTML_TAG_END -->`;
    }
  })}</li></ol>
</div>`;
});
const AboutUs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".our-goal-container.svelte-vl5qba{text-align:center;margin:20px auto;padding:0 20px;max-width:800px}.goal-title.svelte-vl5qba{font-size:3.8rem;font-weight:bold;margin:20px}.image-container.svelte-vl5qba{display:flex;justify-content:center;flex-direction:column;gap:20px;align-items:center;margin-bottom:20px}.coding-icon-image.svelte-vl5qba{width:38%;height:auto;margin:0 0}.small-icon-image.svelte-vl5qba{width:46%;height:auto;margin:0 0}.goal-image.svelte-vl5qba{width:80%;max-width:450px;border-radius:7%;box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.text-description.svelte-vl5qba{font-size:1.2rem;color:darkgrey;margin:0 0;line-height:8px}.goal-description.svelte-vl5qba{font-size:1.7rem;line-height:1.8;margin-bottom:40px;color:#555}.goal-big-description.svelte-vl5qba{font-size:2.7rem;line-height:1.6;color:#555}@media(max-width: 600px){.goal-title.svelte-vl5qba{font-size:3.6rem;margin:40px}.goal-description.svelte-vl5qba{font-size:1.3rem;margin:38px 15px;line-height:2.15}.goal-big-description.svelte-vl5qba{font-size:2.2rem;margin:50px 15px;line-height:1.85}}",
  map: null
};
const AboutUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css$1);
  $$unsubscribe__();
  return `<div class="our-goal-container svelte-vl5qba"><div class="image-container svelte-vl5qba"><img src="/images/love.png" class="small-icon-image svelte-vl5qba" alt="">
        <p class="text-description svelte-vl5qba">${escape($_("좋은 인연 검색중..."))}</p></div>
    <h1 class="goal-title svelte-vl5qba">About us</h1>
    <div style="margin-top: 50px"></div>

    <div class="image-container svelte-vl5qba"><img src="/images/profile1.jpg" alt="우리 가족" class="goal-image svelte-vl5qba">
        <p class="text-description svelte-vl5qba">${escape($_("우리의 어릴때 모습. 훈훈했다"))}</p></div>

    <div style="margin-top: 50px"></div>

    <p class="goal-description svelte-vl5qba">${escape($_("우리는 어플리케이션을 통해 만난 국제 부부에요."))}</p>

    <p class="goal-description svelte-vl5qba">${escape($_("지금은 예쁜 두 아이의 부모죠."))}</p>

    <p class="goal-description svelte-vl5qba"><!-- HTML_TAG_START -->${$_("같이 행복한 시간들을 지내다보니, <b>국제부부에 대한 장점</b>들이 많이 있더라구요.")}<!-- HTML_TAG_END --></p>



    <div class="image-container svelte-vl5qba"><img src="/images/profile2.jpg" alt="우리 가족" class="goal-image svelte-vl5qba">
        <p class="text-description svelte-vl5qba">${escape($_("결혼식날 모습"))}</p></div>


    <p class="goal-description svelte-vl5qba"><!-- HTML_TAG_START -->${$_("하지만 어떻게 만나야하는지, 또 나쁜 사람은 아닐지에 대한 <b>걱정이 많은 사람들을 많이 봤어요</b>")}<!-- HTML_TAG_END --></p>

    <p class="goal-description svelte-vl5qba">${escape($_("그래서 저희가 직접 운영해보려고 해요."))}</p>
    <p class="goal-description svelte-vl5qba"><!-- HTML_TAG_START -->${$_("저희가 생각하는 <b>이상적인 가정을 꾸릴 수 있는 그런 만남</b>을 목적으로요")}<!-- HTML_TAG_END --></p>
    <div style="margin-top: 100px"></div>
    <div class="image-container svelte-vl5qba"><img src="/images/coding.png" alt="" class="coding-icon-image svelte-vl5qba">
        <p class="text-description svelte-vl5qba">${escape($_("우리의 목적을 위해"))}</p>
        <p class="text-description svelte-vl5qba">${escape($_("J가 열심히 개발하고 있어요"))}</p></div>
    <p class="goal-description svelte-vl5qba"><!-- HTML_TAG_START -->${$_("가볍지 않은 <b>진중한 만남을 꿈꾸는 분</b>이라면 들어오세요.")}<!-- HTML_TAG_END --></p>
    <h1 class="goal-big-description svelte-vl5qba">${escape($_("저희가 도와드릴께요"))}</h1>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".center-alie-map-title.svelte-1vemezb{text-align:center;font-size:clamp(1rem, 7.5vw + 1rem, 7rem);margin:0 0}.center-title.svelte-1vemezb{text-align:center;font-size:clamp(1rem, 2.2vw + 1rem, 7rem);margin:0 30px}.image-container.svelte-1vemezb{display:flex;flex-direction:column;justify-content:center;align-items:center}.image-caption.svelte-1vemezb{font-size:1.3rem;font-style:italic;text-align:center;margin-bottom:3px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let lang = "en";
  const images = [
    { src: "/images/apple.png", alt: "Apple" },
    { src: "/images/google.png", alt: "Google" }
  ];
  $$result.css.add(css);
  $$unsubscribe__();
  return `${validate_component(FadeIn, "FadeIn").$$render($$result, { delay: "0s" }, {}, {
    default: () => {
      return `<div class="image-container svelte-1vemezb"><img src="/images/family.png" style="width: 65%; max-width: 500px; margin-top: 10px; margin-bottom: 10px" alt="">
        <p class="image-caption svelte-1vemezb">T, J and M</p></div>`;
    }
  })}
${validate_component(FadeIn, "FadeIn").$$render($$result, { delay: "0.2s" }, {}, {
    default: () => {
      return `<h1 class="center-alie-map-title svelte-1vemezb">Alie Map</h1>`;
    }
  })}
${validate_component(FadeIn, "FadeIn").$$render($$result, { delay: "0.4s" }, {}, {
    default: () => {
      return `<p class="center-title svelte-1vemezb">${escape($_("국제부부가 진심을 담아 글로벌 데이트앱을 운영중이에요!"))}</p>`;
    }
  })}
${validate_component(FadeIn, "FadeIn").$$render($$result, { delay: "0.6s" }, {}, {
    default: () => {
      return `${validate_component(Downloads, "Downloads").$$render($$result, { images }, {}, {})}`;
    }
  })}

<div style="margin-top: 75px">${validate_component(FadeIn, "FadeIn").$$render($$result, { delay: "0.8s" }, {}, {
    default: () => {
      return `${validate_component(Youtube, "Youtube").$$render(
        $$result,
        {
          videoId: "dpD0LPPOh-8",
          description: $_("우리의 유튜브 (Alien Diary), 우리의 이야기를 들을 수 있어요. 일상 기록과 개발 일기가 올라가요")
        },
        {},
        {}
      )}`;
    }
  })}
    <div style="margin-top: 90px">${validate_component(AboutUs, "AboutUs").$$render($$result, {}, {}, {})}</div>
    <div style="margin-top: 160px">${validate_component(OurGoal, "OurGoal").$$render($$result, {}, {}, {})}</div>
    <div style="margin-top: 120px; margin-bottom: 120px">${validate_component(Contact, "Contact").$$render($$result, { lang }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
