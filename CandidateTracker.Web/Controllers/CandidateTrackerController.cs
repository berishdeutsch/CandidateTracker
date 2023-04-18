using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTrackerController : ControllerBase
    {
        private string _connectionString;
        public CandidateTrackerController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Pending;
            repo.Add(candidate);
        }
        
        [Route("getpendingcount")]
        [HttpGet]
        public int GetPendingCount()
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            return repo.GetPendingCount();
        }
        [Route("getconfirmedcount")]
        [HttpGet]
        public int GetonfirmedCount()
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            return repo.GetConfirmedCount();
        }
        [Route("getRefusedcount")]
        [HttpGet]
        public int GetRefusedCount()
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            return repo.GetRefusedCount();
        }
        [Route("getpendingcandidates")]
        [HttpGet]
        public List<Candidate> GetPendingCandidates()
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            return repo.GetPendingCandidates();
        }
        [Route("getconfirmedcandidates")]
        [HttpGet]
        public List<Candidate> GetConfirmedCandidates()
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            return repo.GetConfirmedCandidates();
        }
        [Route("getrefusedcandidates")]
        [HttpGet]
        public List<Candidate> GetRefusedCandidates()
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            return repo.GetRefusedCandidates();
        }

        [Route("getcandidatebyid")]
        [HttpGet]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateTrackerRespository(_connectionString);
            return repo.GetCandidateById(id);
        }
    }
}
