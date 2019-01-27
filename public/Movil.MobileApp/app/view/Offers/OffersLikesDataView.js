﻿Ext.define('MobileApp.view.Offers.OffersLikesDataView', {
   extend: 'Ext.Container',
   xtype: 'offerslikesdataview',

   config: {
      layout: 'fit',
      // title:'Gustos',
      items: [{
         /*height:'100%',*/
         xtype: 'list',
         id: 'offersLikesDataView',
         scrollToTopOnRefresh: false,
         scrollable: true,
         style: 'background-color: #ccc',
         inline: true,
         locales: {
            emptyText: 'Offers.emptyText'
         },
         //  emptyText: '<img style="width: 300px;height: 236px; display:block; margin:4em auto 0 auto;" src="./resources/images/coffee1.png" alt="No Offer available currently" >',
         cls: 'offersDataview',
         itemTpl: new Ext.XTemplate(
            '<div class="main">' +
               //'<p class="offerTitle">{brandName}</p>' +
                '<div class="profileImage" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/120x50/' + ppi + '/{brandId}-logo);' + 'background-size: 100% 100%;"> </div>' +
               '<div class="img" style="background-image: url(' + MobileApp.util.Config.getImgUrl() + '/image/150x112/' + ppi + '/{key}-crop);' + 'background-size: cover;"> </div>' +
              /* '<img class="profileImage" src={profileImage}>' +
               //'<h1>{brandName}</h1>' +
               '<tpl if="img==\'data:,\'">' +
               '<img class="img" src="./resources/icons/nw-icons/bg.jpg">' +
               '<tpl else>' +
               '<img class="img" src={listImg} >' +
               '</tpl>' +*/
               '<div class="offerTagLineBlurDiv">{tagLine}</div>' +
               //'Termina' +
               '<div>{[this.getPercentage(values.validTo)]}</div>' +
               // '<p class="offerExpiry">Termina el {validTo}</p>' +
              //'<div>{validTo}</div>' +
               '<div class="offerBottomBar">' +
               '<div style="float:left; width:40%;">' +
               '<img src="./resources/icons/nw-icons/comment.png"></img>' +
               '<p id="{key}-comment" class="offerComments">{commentCount}</p>' +
               //'<label>{commentCount}</label>' +
               '</div>' +
               '<div style="float:right; width:30%;">' +
               '<img src="./resources/icons/nw-icons/like_white.png">' +
               //'<label>{likeCount}</label>' +
               '<p id="{key}-like" class="offerLikes">{likeCount}</p>' +
               '</div>' +
               //'<div style="float:left; width:20%;">' +
               // '<img src="./resources/icons/nw-icons/share.png">' +
            //'</div>' +
               '</div>' +
               '</div>',
            {
               getPercentage: function(validTo)
               {
                  var items = Ext.getStore('LoginSqlStore').data.items;
                  if (items.length != 0)
                  {
                     var lang = items[0].data.lang;
                     if (lang == 'en')
                     {
                        var dateEn = '<p class="offerExpiry">Expires on&nbsp' + validTo + '</p>';
                        return dateEn;
                     }
                     if (lang == 'fr')
                     {
                        var dateFr = '<p class="offerExpiry">Termina &nbsp' + validTo + '</p>';
                        return dateFr;
                     }

                  } else
                  {
                     return '<p class="offerExpiry">Termina &nbsp' + validTo + '</p>';
                  }
               }
            }
         ),

         store: 'OffersLikesDataViewSqlStore'
      }],
      listeners: {
         initialize: function(comp, eOpts)
         {
            comp.bodyElement.on(
               'painted',
               function(event, node, options, eOpts)
               {

                  /*send event as a argument to get direction of swipe*/
                  this.fireEvent('painted', event);
               },
               comp
            );

         }
      }
   }
});