using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateTrackerRespository
    {
        private string _connectionString;

        public CandidateTrackerRespository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Candidate candidate)
        {
            var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public int GetPendingCount()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).Count();
        }

        public int GetConfirmedCount()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).Count();
        }

        public int GetRefusedCount()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).Count();
        }
        public List<Candidate> GetPendingCandidates()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }
        public List<Candidate> GetConfirmedCandidates()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }
        public List<Candidate> GetRefusedCandidates()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }

        public Candidate GetCandidateById(int id)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
    }
}
