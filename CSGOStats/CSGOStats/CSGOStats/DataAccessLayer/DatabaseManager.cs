using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CSGOStats.Models;

namespace CSGOStats.DataAccessLayer
{
    public partial class DatabaseManager
    {
        private string m_ConnectionString;

        public DatabaseManager(string ConnectionString)
        {
            m_ConnectionString = ConnectionString;
        }
    }
}