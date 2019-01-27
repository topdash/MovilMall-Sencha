﻿Ext.define('MobileApp.view.Events.MyEventsList', {
   extend: 'Ext.List',
   xtype: 'myeventslist',

   config: {
      //title: 'Mis Eventos',
      cls: 'eventList',
      variableHeights: true,
      scrollToTopOnRefresh: false,
      onItemDisclosure: false,
      store: 'MyEventsListSqlStore',
    /*  locales: {
         emptyText: 'Events.emptyText'
      },*/
      //emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/emptyEvent.png" alt="No Offer available currently" >',

      itemTpl: new Ext.XTemplate(
         '<div class="eventBlock">' +
            /*'<tpl if="photo==\'data:,\'">' +
            '<img class="eventImage" src="./resources/icons/nw-icons/bg.jpg">' +
            '<tpl else>' +
            '<img class="eventImage" src="{photo}">' +
            '</tpl>' +*/
             '<div class="eventImage" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/110x110/' + ppi + '/{key});' + 'background-size: 100% 100%;height: 100%;width: 100%;"> </div>' +
            '<div class="eventDetailsTop">' +
            '<h4>{name}</h4>' +
            '<p class="eventLoc">{location}</p>' +
            '<p class="eventDateTime">{date}</p>' +
            '</div>' +
            '<div class="eventDetailsBottom">' +
            '<div>{[this.getPercentage(values.attendeeCount)]}</div>' +
            // '<p class="eventAttendance">Attendees : {attendeeCount}</p>' +
            '<img id="shareImg" class="eventShareButton" src="resources/icons/nw-icons/share.png">' +
            '</div>' +
            '</div>',
         {
            getPercentage: function (attendeeCount) {
               var items = Ext.getStore('LoginSqlStore').data.items;
               if (items.length != 0) {
                  var lang = items[0].data.lang;
                  if (lang == 'en') {
                     var attendeeEn = '<p class="eventAttendance">Attending :&nbsp' + attendeeCount + '</p>';
                     return attendeeEn;
                  }
                  if (lang == 'fr') {
                     var attendeeFr = '<p class="eventAttendance">Asistiendo  :&nbsp' + attendeeCount + '</p>';
                     return attendeeFr;
                  }

               } else {
                  return '<p class="eventAttendance">Asistiendo  :&nbsp' + attendeeCount + '</p>';
               }
            }
         }
      ),
      listeners: {
         initialize: function (comp, eOpts) {
          
            comp.bodyElement.on(
             'painted',
             function (event, node, options, eOpts) {

                /*send event as a argument to get direction of swipe*/
                this.fireEvent('painted', event);
             },
             comp
          );
            comp.bodyElement.on(
               'swipe',
               function (event, node, options, eOpts) {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('swipe', event);
               },
               comp
            );

            comp.bodyElement.on(
               'tap',
               function (event, node, options, eOpts) {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('tap', event);
               },
               comp
            );
         }
      }
   }
});