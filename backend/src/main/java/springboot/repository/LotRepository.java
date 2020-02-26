package springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springboot.domain.entity.Lot;

@Repository
public interface LotRepository extends JpaRepository<Lot, Long> {

}
