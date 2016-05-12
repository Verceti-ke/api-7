var xBrowserSync = xBrowserSync || {};
xBrowserSync.API = xBrowserSync.API || {};

/* ------------------------------------------------------------------------------------
 * Class name:  xBrowserSync.API.Config 
 * Description: Stores local environment config info.
 * ------------------------------------------------------------------------------------ */

xBrowserSync.API.Config = function() {
    'use strict';
    
    var global = require('./global.js');
    
    return {
        // Determines whether users will be allowed to create new syncs on this server. Note: if this setting is set to false, users who have already synced to this service and have a sync ID will still able to get and update their syncs. Default is true.
        allowNewSyncs: true,
        
        // Maximum number of new syncs that can be created per day by a single IP address in order to prevent new sync flooding. Default is 10.
        dailyNewSyncLimit: 10,
        
        // Mongo db settings
        db: {
            // The mongo db server address to connect to, either a hostname, IP address, or UNIX domain socket.
            host: 'localhost',
            
            // Name of the mongo database to use.
            name: 'xBrowserSync',        
            
            // Username to authenticate with when connecting to mongo db. Default is process.env.XBROWSERSYNC_DB_USER which uses the local environment variable XBROWSERSYNC_DB_USER.
            username: process.env.XBROWSERSYNC_DB_USER,
            
            // Password to authenticate with when connecting to mongo db. Default is process.env.XBROWSERSYNC_DB_PWD which uses the local environment variable XBROWSERSYNC_DB_PWD.
            password: process.env.XBROWSERSYNC_DB_PWD
        },
        
        // The maximum number of syncs to be held on the service, once this limit is reached no more new syncs are permitted though users with an existing sync ID are still allowed to get and update their sync data. Default is 5242. This value multiplied by the maxSyncSize will determine the maximum amount of disk space used by the xBrowserSync service. Using the default values, the maximum amount of disk space used will be 1GB.
        maxSyncs: 5242,
        
        // The maximum sync size in bytes. Default is 1048576 or 200kB.
        maxSyncSize: 204800,
        
        // Node.js server settings
        server: {
            // Host name or IP address to use for Node.js server for accepting incoming connections.
            host: '127.0.0.1',
            
            // Port to use for Node.js server for accepting incoming connections.
            port: '8080',
            
            // Throttling settings to use for Node.js server to prevent request flooding.
            throttle: {
                // Maximum possible number of requests per second. Default is 50.
                burst: 50,
                
                // Average rate of requests per second. Default is 100.
                rate: 100
            }
        },
        
        // Status of xBrowserSync server, if set to offline as per commented out value, no clients will be able to sync to this service. Default is global.serviceStatuses.online.
        status: global.serviceStatuses.online,
        //status: global.serviceStatuses.offline,
        
        // This message will be displayed in the service status panel of the client app when using this xBrowserSync service. Ideally the message should be 130 characters or less. Use this message to inform users of interruptions to the service or if no new syncs are being accepted, as per the commented out example message below.   
	    statusMessage: '',
	    //statusMessage: 'This xBrowserSync service is not accepting new syncs. You may sync to this service only if you have already created a sync here.',
    };
};

module.exports = xBrowserSync.API.Config();