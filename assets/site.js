(() => {
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.getElementById('mobile-menu');
  const closeMenu=()=>{
    if(!toggle||!menu) return;
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open navigation');
  };
  if(toggle&&menu){
    toggle.addEventListener('click',()=>{
      const opened=menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(opened));
      toggle.setAttribute('aria-label',opened?'Close navigation':'Open navigation');
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&menu.classList.contains('open')){closeMenu();toggle.focus();}});
    document.addEventListener('click',ev=>{if(menu.classList.contains('open')&&!menu.contains(ev.target)&&!toggle.contains(ev.target))closeMenu();});
  }

  const query=new URLSearchParams(location.search);
  const interestSelect=document.querySelector('select[name="interest"]');
  if(interestSelect&&query.has('interest')){
    const chosen=query.get('interest');
    const option=[...interestSelect.options].find(o=>o.value.toLowerCase()===chosen.toLowerCase());
    if(option)interestSelect.value=option.value;
  }

  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',ev=>{
      ev.preventDefault();
      if(!form.reportValidity())return;
      const data=new FormData(form);
      const subject='Kura website inquiry — '+data.get('interest');
      const body=['Name: '+data.get('name'),'Email: '+data.get('email'),'Company: '+(data.get('company')||'Not specified'),'Interest: '+data.get('interest'),'','Message:',''+data.get('message')].join('\n');
      location.href='mailto:info@kuratek.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    });
  }

  // Merchant payment journey: user-controlled tabs, not a timer that overrides selection.
  const steps=[...document.querySelectorAll('.demo-step')];
  const panels=[...document.querySelectorAll('.demo-panel')];
  const activate=step=>{
    steps.forEach(s=>{
      const selected=s.dataset.step===step;
      s.classList.toggle('is-active',selected);
      s.setAttribute('aria-selected',String(selected));
      s.tabIndex=selected?0:-1;
    });
    panels.forEach(p=>{p.hidden=p.dataset.panel!==step;});
  };
  steps.forEach((step,index)=>{
    step.addEventListener('click',()=>activate(step.dataset.step));
    step.addEventListener('keydown',ev=>{
      if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();activate(step.dataset.step);}
      if(['ArrowRight','ArrowLeft','Home','End'].includes(ev.key)){
        ev.preventDefault();
        const next=ev.key==='Home'?0:ev.key==='End'?steps.length-1:(index+(ev.key==='ArrowRight'?1:-1)+steps.length)%steps.length;
        activate(steps[next].dataset.step);steps[next].focus();
      }
    });
  });

  // Reveal class stays visible without JavaScript; observer is purely progressive.
  const reveals=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-in');observer.unobserve(entry.target);}});
    },{threshold:.05});
    reveals.forEach(element=>observer.observe(element));
  }else reveals.forEach(el=>el.classList.add('is-in'));

  const mobileCta=document.getElementById('mobile-cta');
  const hero=document.querySelector('.home-hero');
  if(mobileCta&&hero&&'IntersectionObserver' in window){
    const observer=new IntersectionObserver(([entry])=>{
      mobileCta.hidden=entry.isIntersecting;
    },{threshold:.05});
    observer.observe(hero);
  }
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('video.demo-media').forEach(v=>{
      v.removeAttribute('autoplay');v.pause();v.controls=true;
    });
  }
})();