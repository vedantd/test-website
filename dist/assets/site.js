(()=>{
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.getElementById('mobile-menu');
  if(toggle && menu){
    toggle.addEventListener('click',()=>{
      const open=menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }));
  }

  const query=new URLSearchParams(location.search);
  const select=document.querySelector('select[name="interest"]');
  if(select&&query.has('interest')){
    const intent=query.get('interest');
    const option=Array.from(select.options).find(o=>o.value.toLowerCase()===intent.toLowerCase());
    if(option) select.value=option.value;
  }

  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',ev=>{
      ev.preventDefault();
      if(!form.reportValidity()) return;
      const data=new FormData(form);
      const subject='Kura website inquiry — '+data.get('interest');
      const body=['Name: '+data.get('name'),'Email: '+data.get('email'),'Company: '+(data.get('company')||'Not specified'),'Interest: '+data.get('interest'),'','Message:',''+data.get('message')].join('\n');
      location.href='mailto:info@kuratek.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
    });
  }

  // Homepage demo flow
  const steps=[...document.querySelectorAll('.demo-step')];
  const panels=[...document.querySelectorAll('.demo-panel')];
  const activate=step=>{
    steps.forEach(s=>s.classList.toggle('is-active', s.dataset.step===step));
    panels.forEach(p=>{
      const on=p.dataset.panel===step;
      p.hidden=!on;
    });
  };
  steps.forEach(step=>{
    step.addEventListener('click',()=>activate(step.dataset.step));
    step.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();activate(step.dataset.step);}
    });
    step.tabIndex=0;
  });
  if(steps.length){
    let i=0;
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduce){
      setInterval(()=>{
        i=(i+1)%steps.length;
        activate(steps[i].dataset.step);
      },4200);
    }
  }

  // Reveal on scroll (mark already-visible immediately)
  const reveals=[...document.querySelectorAll('.reveal')];
  if(reveals.length){
    if(!('IntersectionObserver' in window)){
      reveals.forEach(el=>el.classList.add('is-in'));
    }else{
      const io=new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },{threshold:.08, rootMargin:'0px 0px -4% 0px'});
      reveals.forEach(el=>{
        const rect=el.getBoundingClientRect();
        if(rect.top < window.innerHeight*0.92) el.classList.add('is-in');
        else io.observe(el);
      });
    }
  }

  // Sticky mobile CTA after hero
  const mobileCta=document.getElementById('mobile-cta');
  const hero=document.querySelector('.home-hero');
  if(mobileCta && hero && 'IntersectionObserver' in window){
    const io=new IntersectionObserver(([entry])=>{
      mobileCta.hidden=entry.isIntersecting;
    },{threshold:0.05});
    io.observe(hero);
  }

  // Respect reduced motion for product demos
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('video.demo-media').forEach(v=>{
      v.removeAttribute('autoplay');
      v.pause();
      v.controls=true;
    });
  }
})();
