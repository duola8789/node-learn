'use strict';
/**
 * Created By zh on 2019-06-10
 */
const helper = require('./helper');

/*const gzipData = helper.gzip({ a: 1 });

console.log('GZIP DATA: ', gzipData);
console.log('--------\n\r');*/

const obj = {
  "originFilePaths": [
    "__upload/__apkTest/2019/06/12/10/172f3161-91f5-4a95-95b6-120a16081eca.zip"
  ],
  "permissionList": [
    "android.permission.READ_CONTACTS",
    "android.permission.SEND_SMS",
    "android.permission.CHANGE_WIFI_STATE",
    "android.permission.GET_PACKAGE_SIZE",
    "android.permission.READ_CALENDAR",
    "android.permission.GRANT_RUNTIME_PERMISSIONS",
    "android.permission.REVOKE_RUNTIME_PERMISSIONS",
    "android.permission.BODY_SENSORS",
    "android.permission.RECORD_AUDIO",
    "android.permission.CAMERA",
    "com.android.voicemail.permission.ADD_VOICEMAIL",
    "android.permission.USE_SIP",
    "android.permission.PROCESS_OUTGOING_CALLS",
    "android.permission.GET_ACCOUNTS",
    "android.permission.CALL_PHONE",
    "android.permission.INTERNET",
    "android.permission.WRITE_SMS",
    "android.permission.ACCESS_NETWORK_STATE",
    "android.permission.READ_SMS",
    "android.permission.MODIFY_AUDIO_SETTINGS",
    "android.permission.INTERNET",
    "android.permission.WRITE_EXTERNAL_STORAGE",
    "android.permission.READ_EXTERNAL_STORAGE",
    "android.permission.ACCESS_WIFI_STATE",
    "android.permission.READ_PHONE_STATE",
    "com.android.launcher.permission.WRITE_SETTINGS",
    "com.android.launcher.permission.READ_SETTINGS",
    "android.permission.RECEIVE_SMS",
    "android.permission.INTERACT_ACROSS_USERS",
    "android.permission.INTERACT_ACROSS_USERS_FULL",
    "android.permission.BLUETOOTH_ADMIN",
    "android.permission.BLUETOOTH",
    "android.permission.USE_FINGERPRINT",
    "android.permission.SYSTEM_ALERT_WINDOW",
    "android.permission.WRITE_SETTINGS",
    "android.permission.CAPTURE_AUDIO_OUTPUT",
    "android.permission.DISABLE_KEYGUARD",
    "android.permission.INSTALL_PACKAGES",
    "com.android.launcher.permission.INSTALL_SHORTCUT",
    "android.permission.ACCESS_FINE_LOCATION",
    "com.android.settings.permission.CLOUD_SETTINGS_PROVIDER",
    "android.permission.PROCESS_OUTGOING_CALLS",
    "android.permission.WRITE_CALENDAR",
    "android.permission.WAKE_LOCK",
    "android.permission.SYSTEM_OVERLAY_WINDOW",
    "android.permission.READ_CALL_LOG",
    "android.permission.WRITE_CALL_LOG",
    "android.permission.WRITE_CONTACTS",
    "android.permission.WRITE_CONTACTS",
    "android.permission.READ_PHONE_NUMBERS",
    "android.permission.ANSWER_PHONE_CALLS",
    "android.permission.MANAGE_USERS",
    "android.permission.MOUNT_UNMOUNT_FILESYSTEMS"
  ],
  "_id": "0de3a12b-20190611174750",
  "location": 1,
  "tester": "zhouhao8",
  "apkUrl": "https://sec-cdn.static.xiaomi.net/secStatic/groups/miui-sec/common/privacy/PrivacyApkTool.apk",
  "createdAt": "2019-06-12T02:47:29.664Z",
  "updatedAt": "2019-06-12T02:48:37.469Z",
  "__v": 0,
  "DeviceName": "raphaelin",
  "MiuiVersion": "MIUI 9 9.6.11 | 开发版",
  "appName": "小米商城-国际版",
  "appVersion": "8.9.2",
  "data": "xíXÝj\u001bG\u0014~\u0015±¸A\u00051Ò®þ\u0005¦ØnJ\u0004VZj§6a\u0019ÍV\u0013ÍÎ,3³Û\b7Pz\u0015SÚR\n½éEï\u0002\u0016rÒôiª¼EÏhWÎZ\u001dß\u0015½Ñîïsæã¬N\u001c\"#\u00141\u0014r9Æ\u001cé©Á3Ú;°\u000fm0tè\fÇ8Åc\u0011¢»O\b\râ¡xh°©D,aHS(fæ(V,Åd>É\u000f\fã\b\u0007Á¡\f«E\u001b´úïç\u0018X\u0004J²\u0000\tjÐWlÂÐçð3\u0014\u0013BjFì\u0005¢ZWÏÅKÿf»µ\u0002È·Xl³×Üd¢\býq:hºím>\u001fÒ\u0011ÆES·×¹Â\u0014_0m®g\u001fèx¬ÑþþÑ^\u001csF°=5+\u001a\nfî­õ\nå@Gð\u0003þH\u0003E±¡\u0017â66\u0010éPh£\n$óB\n\u001f¯Öí§êºíö6Ð=bX\n%>s¦ ãt \\]3Z\u0002v\u001a^ë\u001a\u0010¨Õë5\u001a[a¼FçÝ(;÷òÄFCº\u0015Éíô6 ¤F÷\n\u0005LÇØé\nb%Ï|7³\u0000×C)c°àð¨æïyÎî5v\u001eavÉÉõzç¥x{\u0001\u0015pJ\f\u001aQ3\u0001b\"3Z½\u000f\u0005Hi%\u0013\u0016Ûi\u0015\tC®|?Ma\u0011µ}¸yìA\u001dU¨\u000f S yjÁ&Ë¦Ýê¾\u000b÷y(Mæ²ÜTa½èu\u0016BÜ 6ÙÆ\f^»y}fèÌP2CÉ\f·\u0019Ê9£dMJ6)ç\u0019Jf¸QÌà<­9ÃÑÝáÿò'¡ÆS)æèxõ6Â\u0002ê¬,od{\u0018T7Yõ¯æôÑjôQÒGI\u001f7u°(¢d)n2SØAcjL|È´q\u0006_8<{yTs\u0002l0Ì\u001cV«\u0007õz¨p<E\u0013LèXÊ\u0019°õ´ÜºçynÇí7»=·éõ\u001a\u001fL\u0018åÞÕI\u001cKe´Ï\"ÛÌø:ù\\!\u0013á{ÞA\u0018ÄiË\u0017É\u0013HÈZ\u000b2*ðÓà\\F¦JFÔ'62ò\r\u001eëI¾{?`\u0018ð-Þº °©RRùp5h(\u0015£Ku\u001cû4ÐÚ×Ð_pg|{Ê21\u0017\u0013¸ ¢þ\bëU&FfZ?\u0002CØÇ\u0002¥¦8âg7Ë\u0015DXlåÛ³åÌg¦(¾¦\u0007\u0002HÎuw&REØì>ÖRÜMìæA\u0013+i$</\u0010H\u0002iË\fëÍBÅ qÛ]\u0004L¼6ò\u001aKaþ\u0005\bº³~XüúªV¸¤\t \u0007@0\u001a{q\"øfätÙ\u0006\u0011#\n×­Ö5U)UW'¸\u0015å<Gè)¯\u0003iöQ¯¿ãâû\u0017¿×ÞüþÇâçg¯¿;}ýË«³ÓðòæÛçµÅ¿ýûòÅåé=|»z\u0018ê¶Þ\u001f·¦\u001f\u0001+g³Í}\u001cQð²Ç)Ð5g\u0004\u0003ÜgTÙZf4|0¬ô+}ÔA®[ùº²øûÅ?>\u0003Ë4³:2jÝð­òx\u001eÛ\u0000E7.³\tÂ\u0019¸Oÿ\u0003M?m",
  "developer": "开发者2",
  "gzip": true,
  "packageName": "com.mi.global.shop",
  "successCode": 0,
  "versionStr": "MIUI 9 9.6.11",
  "versionType": "开发版",
  "unzipData": {
    "com.mi.global.shop": {
      "MAC": {
        "stackMsg": "java.lang.Exception\n\tat miui.security.privacy.PrivacyUtil.addLog(PrivacyUtil.java:49)\n\tat android.net.wifi.WifiInfo.getMacAddress(WifiInfo.java:354)\n\tat com.mi.util.t$a.getMacAddress(SourceFile:315)\n\tat com.mi.util.Device.b(SourceFile:186)\n\tat com.mi.util.Device.a(SourceFile:134)\n\tat com.mi.global.bbs.BBSApplication.bbsInit(SourceFile:45)\n\tat com.mi.global.shop.ShopApp.onCreate(SourceFile:109)\n\tat android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1155)\n\tat android.app.ActivityThread.handleBindApplication(ActivityThread.java:6024)\n\tat android.app.ActivityThread.access$1200(ActivityThread.java:206)\n\tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1686)\n\tat android.os.Handler.dispatchMessage(Handler.java:106)\n\tat android.os.Looper.loop(Looper.java:201)\n\tat android.app.ActivityThread.main(ActivityThread.java:6885)\n\tat java.lang.reflect.Method.invoke(Native Method)\n\tat com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:547)\n\tat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:873)\n\njava.lang.Exception\n\tat miui.security.privacy.PrivacyUtil.addLog(PrivacyUtil.java:49)\n\tat android.net.wifi.WifiInfo.getMacAddress(WifiInfo.java:354)\n\tat com.mi.util.Device.b(SourceFile:253)\n\tat com.mi.util.Device.a(SourceFile:137)\n\tat com.mi.global.bbs.BBSApplication.bbsInit(SourceFile:45)\n\tat com.mi.global.shop.ShopApp.onCreate(SourceFile:109)\n\tat android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1155)\n\tat android.app.ActivityThread.handleBindApplication(ActivityThread.java:6024)\n\tat android.app.ActivityThread.access$1200(ActivityThread.java:206)\n\tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1686)\n\tat android.os.Handler.dispatchMessage(Handler.java:106)\n\tat android.os.Looper.loop(Looper.java:201)\n\tat android.app.ActivityThread.main(ActivityThread.java:6885)\n\tat java.lang.reflect.Method.invoke(Native Method)\n\tat com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:547)\n\tat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:873)\n\njava.lang.Exception\n\tat miui.security.privacy.PrivacyUtil.addLog(PrivacyUtil.java:49)\n\tat android.net.wifi.WifiInfo.getMacAddress(WifiInfo.java:354)\n\tat com.mi.util.t$a.getMacAddress(SourceFile:315)\n\tat com.mi.util.Device.b(SourceFile:186)\n\tat com.mi.util.Device.a(SourceFile:134)\n\tat com.mi.global.bbs.BBSApplication.bbsInit(SourceFile:45)\n\tat com.mi.global.shop.ShopApp.onCreate(SourceFile:109)\n\tat android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1155)\n\tat android.app.ActivityThread.handleBindApplication(ActivityThread.java:6024)\n\tat android.app.ActivityThread.access$1200(ActivityThread.java:206)\n\tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1686)\n\tat android.os.Handler.dispatchMessage(Handler.java:106)\n\tat android.os.Looper.loop(Looper.java:201)\n\tat android.app.ActivityThread.main(ActivityThread.java:6885)\n\tat java.lang.reflect.Method.invoke(Native Method)\n\tat com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:547)\n\tat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:873)\n\njava.lang.Exception\n\tat miui.security.privacy.PrivacyUtil.addLog(PrivacyUtil.java:49)\n\tat android.net.wifi.WifiInfo.getMacAddress(WifiInfo.java:354)\n\tat com.mi.util.Device.b(SourceFile:253)\n\tat com.mi.util.Device.a(SourceFile:137)\n\tat com.mi.global.bbs.BBSApplication.bbsInit(SourceFile:45)\n\tat com.mi.global.shop.ShopApp.onCreate(SourceFile:109)\n\tat android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1155)\n\tat android.app.ActivityThread.handleBindApplication(ActivityThread.java:6024)\n\tat android.app.ActivityThread.access$1200(ActivityThread.java:206)\n\tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1686)\n\tat android.os.Handler.dispatchMessage(Handler.java:106)\n\tat android.os.Looper.loop(Looper.java:201)\n\tat android.app.ActivityThread.main(ActivityThread.java:6885)\n\tat java.lang.reflect.Method.invoke(Native Method)\n\tat com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:547)\n\tat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:873)\n"
      },
      "IMEI": {
        "stackMsg": "java.lang.Exception\n\tat miui.security.privacy.PrivacyUtil.addLog(PrivacyUtil.java:49)\n\tat android.telephony.TelephonyManager.getDeviceId(TelephonyManager.java:1253)\n\tat com.mi.util.Device.b(SourceFile:240)\n\tat com.mi.util.Device.a(SourceFile:137)\n\tat com.mi.global.bbs.BBSApplication.bbsInit(SourceFile:45)\n\tat com.mi.global.shop.ShopApp.onCreate(SourceFile:109)\n\tat android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1155)\n\tat android.app.ActivityThread.handleBindApplication(ActivityThread.java:6024)\n\tat android.app.ActivityThread.access$1200(ActivityThread.java:206)\n\tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1686)\n\tat android.os.Handler.dispatchMessage(Handler.java:106)\n\tat android.os.Looper.loop(Looper.java:201)\n\tat android.app.ActivityThread.main(ActivityThread.java:6885)\n\tat java.lang.reflect.Method.invoke(Native Method)\n\tat com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:547)\n\tat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:873)\n\njava.lang.Exception\n\tat miui.security.privacy.PrivacyUtil.addLog(PrivacyUtil.java:49)\n\tat android.telephony.TelephonyManager.getDeviceId(TelephonyManager.java:1253)\n\tat com.mi.util.Device.b(SourceFile:240)\n\tat com.mi.util.Device.a(SourceFile:137)\n\tat com.mi.global.bbs.BBSApplication.bbsInit(SourceFile:45)\n\tat com.mi.global.shop.ShopApp.onCreate(SourceFile:109)\n\tat android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1155)\n\tat android.app.ActivityThread.handleBindApplication(ActivityThread.java:6024)\n\tat android.app.ActivityThread.access$1200(ActivityThread.java:206)\n\tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1686)\n\tat android.os.Handler.dispatchMessage(Handler.java:106)\n\tat android.os.Looper.loop(Looper.java:201)\n\tat android.app.ActivityThread.main(ActivityThread.java:6885)\n\tat java.lang.reflect.Method.invoke(Native Method)\n\tat com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:547)\n\tat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:873)\n"
      },
      "httpList": [
        {
          "list": [],
          "data": "https://graph.facebook.com/v3.1/222161937813280?fields=supports_implicit_sdk_logging%2Cgdpv4_nux_content%2Cgdpv4_nux_enabled%2Cgdpv4_chrome_custom_tabs_enabled%2Candroid_dialog_configs%2Candroid_sdk_error_categories%2Capp_events_session_timeout%2Capp_events_feature_bitmask%2Cauto_event_mapping_android%2Cseamless_login%2Csmart_login_bookmark_icon_url%2Csmart_login_menu_icon_url&format=json&sdk=android",
          "protocol": "http",
          "domain": "graph.facebook.com",
          "ip": "157.240.25.20",
          "ipAddress": "美国,,"
        },
        {
          "list": [],
          "data": "http://in.stat.appmifile.com/micra/state/server",
          "protocol": "http",
          "domain": "in.stat.appmifile.com",
          "ip": "13.126.249.89",
          "ipAddress": "印度,马哈拉施特拉邦,孟买"
        },
        {
          "list": [],
          "data": "https://graph.facebook.com/v3.1/222161937813280?fields=supports_implicit_sdk_logging%2Cgdpv4_nux_content%2Cgdpv4_nux_enabled%2Cgdpv4_chrome_custom_tabs_enabled%2Candroid_dialog_configs%2Candroid_sdk_error_categories%2Capp_events_session_timeout%2Capp_events_feature_bitmask%2Cauto_event_mapping_android%2Cseamless_login%2Csmart_login_bookmark_icon_url%2Csmart_login_menu_icon_url&format=json&sdk=android",
          "protocol": "http",
          "domain": "graph.facebook.com",
          "ip": "157.240.23.19",
          "ipAddress": "美国,,"
        },
        {
          "list": [],
          "data": "http://in.stat.appmifile.com/micra/state/server",
          "protocol": "http",
          "domain": "in.stat.appmifile.com",
          "ip": "13.126.249.89",
          "ipAddress": "印度,马哈拉施特拉邦,孟买"
        }
      ]
    },
    "DeviceName": "raphaelin",
    "MiuiVersion": "MIUI 9 9.6.11 | 开发版",
    "versionStr": "MIUI 9 9.6.11",
    "versionType": "开发版",
    "location": 1
  }
}

const unzipData = helper.unzip(obj.data);
console.log('UNZIP DATA: ', unzipData);
