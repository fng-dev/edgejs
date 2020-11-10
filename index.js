var edge = require('edge-js');

var helloWorld = edge.func({
    source: () => {
        /*
                using DcdzDriverBoardLib;
                using DcdzMsCommLib;
                using System;
                using System.Collections.Generic;
                using System.Linq;
                using System.Text;
                using System.Threading.Tasks;
            
                public class Startup
                {
                    public async Task<object> Invoke(dynamic input)
                    {
                        Elock elock = new Elock();
                        return elock.open('COM1');
                        return elock.openBox(0,1);
                    }
                }
            
                public class Elocker
                {
                    private readonly DriverBoardClass _driverboard = new DriverBoardClass();

                    public bool open(string comName)
                    {
                        try
                        {
                            uint funcret = _driverboard.Open(comName);
                            if (funcret == 0)
                                return true;
                            return false;
                        }
                        catch (Exception)
                        {

                            return false;
                        }
                    
                    }

                    public bool openBox(int driverID, int boxID)
                    {
                        try
                        {
                            byte ret;
                            int funcret = _driverboard.OpenBox((byte)driverID, (byte)boxID, out ret);
                            if (funcret == 0)
                                return true;
                            return false;
                        }
                        catch (Exception)
                        {

                            return false;
                        }
                    

                    }
                }
            */
    }
});

const payload = {
    a: 2,
    b: 3,
}
helloWorld(payload, function(error, result) {
    if (error) throw error;
    console.log(result);
});