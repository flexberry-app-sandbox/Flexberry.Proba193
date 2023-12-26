import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba19.caption'),
          title: i18n.t('forms.application.sitemap.proba19.title'),
          children: [{
            link: 'i-i-s-proba19-организация-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-организация-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proba19-должн-сотр-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-должн-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-должн-сотр-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proba19-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-сотрудники-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proba19-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-планир-собес-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proba19-граф-собес-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-граф-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-граф-собес-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-proba19-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-рег-результ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proba19-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-вакант-должн-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-proba19-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba19.i-i-s-proba19-регист-анкеты-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})