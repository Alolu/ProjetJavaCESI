package springboot.service.lot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.domain.entity.Lot;
import springboot.repository.LotRepository;

@Service
public class LotService {

	@Autowired
	private LotRepository lotRepo;
	
	public List<Lot> getLots() {
		return lotRepo.findAll();
	}
	
	public void saveLot(Lot lot) {
		lotRepo.save(lot);
	}
}
