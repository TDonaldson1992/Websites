using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CSGOStats.Models;
using System.Data.SqlClient;

namespace CSGOStats.DataAccessLayer
{
    public partial class DatabaseManager
    {
        public List<WorkoutType> GetWorkoutTypes()
        {
            List<WorkoutType> workouts = new List<WorkoutType>();

            using (var conn = new SqlConnection(m_ConnectionString))
            {
                using (var cmd = conn.CreateCommand())
                {
                    conn.Open();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "tsp_GetWorkoutTypes";

                    using (var reader = cmd.ExecuteReader())
                    {
                        if (!reader.Read())
                        {
                            return null;
                        }

                        WorkoutType type = new WorkoutType();
                        type.WorkoutID = reader.GetInt32(reader.GetOrdinal("WorkoutID"));
                        type.WorkoutName = reader.GetString(reader.GetOrdinal("WorkoutName"));
                        type.DateAdded = reader.GetDateTime(reader.GetOrdinal("DateAdded"));

                        workouts.Add(type);
                    }
                }
            }

            return workouts;
        }
    }
}