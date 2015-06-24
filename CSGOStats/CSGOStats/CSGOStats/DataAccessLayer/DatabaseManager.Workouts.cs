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
        public List<Workout> GetWorkouts()
        {
            List<Workout> workouts = new List<Workout>();

            using (var conn = new SqlConnection(m_ConnectionString))
            {
                using (var cmd = conn.CreateCommand())
                {
                    conn.Open();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "tsp_GetWorkouts";

                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Workout type = new Workout();
                            type.WorkoutID = reader.GetInt32(reader.GetOrdinal("WorkoutID"));
                            type.WorkoutName = reader.GetString(reader.GetOrdinal("WorkoutName"));
                            type.Kills = reader.GetInt32(reader.GetOrdinal("Kills"));
                            type.Assists = reader.GetInt32(reader.GetOrdinal("Assists"));
                            type.Deaths = reader.GetInt32(reader.GetOrdinal("Deaths"));
                            type.Weight = reader.GetDouble(reader.GetOrdinal("Weight"));
                            type.Completed = reader.GetBoolean(reader.GetOrdinal("Completed"));
                            type.DateCompleted = reader.GetDateTime(reader.GetOrdinal("DateCompleted"));

                            workouts.Add(type);
                        }
                    }
                }
            }

            return workouts;
        }
    }
}